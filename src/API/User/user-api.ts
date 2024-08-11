import * as T from "./types";
import LocalStorageAPI from "../LocalStorage";
import Auth from "../../utils/Firebase/auth";
import Database, { dummyUsersQuery, getUserDocumentQuery, UserData } from "../../utils/Firebase/database";
import { fillDummyUser, generateDummyWorkouts, generateRandomRecords } from "../../helpers/functions/dummy-data";
import type { CachedTempGuestData } from "../LocalStorage";

// AUTHENTICATION
export async function createUserWithEmail(data: T.SinginData) {
  const { email, password } = data;
  const { setSigninData, removeSigninData } = LocalStorageAPI;
  try {
    setSigninData(data);
    await Auth.createUserWithEmail(email, password);
  } catch (err) {
    removeSigninData();
    throw err;
  }
}

export async function signInUserWithEmail(data: T.LoginData) {
  const { email, password } = data;
  return Auth.signInWithEmail(email, password);
}

export function singInWithGoogle() {
  return Auth.authWithGoogle();
}

export function singInWithFacebook() {
  return Auth.authWithFacebook();
}

export async function retrivePassword(email: string) {
  return Auth.resetPassword(email);
}

export async function logoutUser() {
  const user = Auth.getCurrentUser()!;
  const { removeGuestData, getLocalUser, removeLocalUser, removeSigninData } = LocalStorageAPI;

  try {
    const isGuest = getLocalUser() && user.isAnonymous;
    await Auth.logoutUser();
    if (isGuest) await Auth.delateAccount(user);
  } catch (err) {
    throw err;
  } finally {
    removeGuestData();
    removeLocalUser();
    removeSigninData();
  }
}

// VALID USER
export async function setUserInDB(userData: UserData) {
  const uid = userData.base.uid;
  const { setDocument } = Database;
  try {
    const userQuery = getUserDocumentQuery(uid);
    await setDocument(userQuery, userData);
  } catch (err) {
    throw err;
  }
}

export async function getUserData(uid: T.Uid) {
  const aaa: T.Lift = "benchPress";

  const { getDoc } = Database;
  const userQuery = getUserDocumentQuery(uid);
  try {
    const snapshot = await getDoc(userQuery);
    if (!snapshot.exists()) return undefined;
    const userData = snapshot.data() as UserData;
    if (userData.isDummy) await fillDummyUser(userData);
    return userData;
  } catch (err) {
    throw err;
  }
}

async function _createBrandNewUser(uid: T.Uid) {
  const { getSigninData, removeSigninData } = LocalStorageAPI;

  try {
    const cachedData = getSigninData();
    const newUserData: UserData = { base: { ...cachedData, uid }, isDummy: false };
    await setUserInDB(newUserData);
    return newUserData;
  } catch (err) {
    logoutUser();
    throw err;
  } finally {
    removeSigninData();
  }
}

export async function getAuthUser(uid: T.Uid): Promise<UserData> {
  try {
    const userData = await getUserData(uid);
    return userData ? userData : await _createBrandNewUser(uid);
  } catch (err) {
    logoutUser();
    throw err;
  }
}

// LOCAL GUEST USER
async function _createNewLocalUser() {
  const { getGuestData, setLocalUser, removeGuestData } = LocalStorageAPI;
  const cachedGuestData = getGuestData();
  const userImpl = Auth.getCurrentUser();
  if (!cachedGuestData || !userImpl) throw Error("Local user authentication failed. Loging out...");

  const uid = userImpl.uid;
  const email = "guest@example.com";
  const birthDate = new Date().toDateString();
  const workouts = generateDummyWorkouts(15, uid);

  try {
    const dummyFriends = await Database.getColection<UserData[]>(dummyUsersQuery);

    const friendsList = dummyFriends.map(({ base }) => {
      return { uid: base.uid, isFav: Math.random() > 0.5 };
    });

    const base = { ...cachedGuestData, uid, email, birthDate };
    const details = { friendsList, workouts, records: generateRandomRecords() };
    const userData: UserData = { base, details, isDummy: true };
    setLocalUser(userData);
    removeGuestData();
    return userData;
  } catch (err) {
    logoutUser();
    throw err;
  }
}

export async function getLocalUser() {
  try {
    const localUser = LocalStorageAPI.getLocalUser();
    return localUser ? localUser : await _createNewLocalUser();
  } catch (err) {
    throw err;
  }
}

export async function openDemo(guestData: CachedTempGuestData) {
  const { setGuestData, removeGuestData } = LocalStorageAPI;
  setGuestData(guestData);
  try {
    await Auth.authAnonymously();
  } catch (err: any) {
    removeGuestData();
    throw err;
  }
}
