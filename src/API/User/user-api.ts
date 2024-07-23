import * as T from "./types";
import { Auth, Database } from "../../utils/Firebase";
import LocalStorageAPI from "../LocalStorage";
import { User as UserImpl } from "firebase/auth";
import { generateDummyWorkouts } from "../../helpers/functions/dummy-data";
import { User } from "../../classes/User";

// CONST QUERYIES
export const dummyUsersQuery = Database.query(
  Database.createColectionRef("users"),
  Database.where("isDummy", "==", true)
);

export const createUserQuery = (uid: T.UserBaseInfo["uid"]) =>
  Database.createDocumentRef(`users/${uid}`);

// AUTHENTICATION
export async function createUserWithEmail(data: T.SinginUserData) {
  const { email, password, gender, nickname, birthDate } = data;
  try {
    const userBaseInfo = { gender, email, nickname, birthDate };
    console.log(userBaseInfo);
    LocalStorageAPI.cacheUser(userBaseInfo);
    await Auth.createUserWithEmail(email, password);
  } catch (err) {
    throw err;
  }
}

export async function signInUserWithEmail(data: T.LoginUserData) {
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
  const guest = LocalStorageAPI.getLocalUser() && user.isAnonymous;
  try {
    await Auth.logoutUser();
    if (guest) await _cleanUpLocalUser(user);
  } catch (err) {
    throw err;
  }
}

// VALID USER
export async function getUser(uid: T.UserBaseInfo["uid"]) {
  try {
    const userData = await getUserData(uid);
    const cacheUserData = LocalStorageAPI.getCachedUser();

    if (userData) return userData;

    if (!cacheUserData)
      throw new Error("Not found data on servers. Loging out...");

    const userBaseInfo = { ...cacheUserData, uid };
    setUserInDB(userBaseInfo);
    LocalStorageAPI.delateCachedUser();
    return new User(userBaseInfo);
  } catch (err) {
    throw err;
  }
}

export async function getUserData(uid: string) {
  const { getDoc } = Database;
  const userQuery = createUserQuery(uid);
  try {
    const snapshot = await getDoc(userQuery);
    return snapshot.exists() ? (snapshot.data() as User) : undefined;
  } catch (err) {
    throw err;
  }
}

export async function setUserInDB(data: T.UserBaseInfo) {
  const { setDocument } = Database;
  const userQuery = createUserQuery(data.uid);
  try {
    await setDocument(userQuery, { base: data });
    return new User(data);
  } catch (err) {
    throw err;
  }
}

// LOCAL GUEST USER
async function _cleanUpLocalUser(user: UserImpl) {
  try {
    LocalStorageAPI.cleanLocalUser();
    await Auth.delateAccount(user);
  } catch (err) {
    throw err;
  }
}

async function _createLocalUser(): Promise<User> {
  const { gender, nickname, image } = LocalStorageAPI.getGuestData()!;
  const { uid } = Auth.getCurrentUser()!;

  try {
    const birthDate = new Date();
    const email = "guest@example.com";
    const dumyWorkouts = generateDummyWorkouts(15);
    const dummyFriends = await Database.getColection<User[]>(dummyUsersQuery);

    const friendsList = dummyFriends.map(({ base }) => {
      return { uid: base.uid, isFav: Math.random() > 0.5 };
    });

    const dummyUser: User = {
      base: { email, uid, gender, nickname, birthDate },
      details: { photoURL: image, friendsList, workouts: dumyWorkouts },
    };

    LocalStorageAPI.setLocalUser(dummyUser);
    return dummyUser;
  } catch (err) {
    throw err;
  }
}

export async function getLocalUser() {
  let localUser = LocalStorageAPI.getLocalUser();
  if (localUser) return localUser;

  try {
    localUser = await _createLocalUser();
    return localUser;
  } catch (err) {
    throw err;
  }
}

export async function openDemo(guest: T.GuestData) {
  const { nickname, image, gender } = guest;
  LocalStorageAPI.setGuestData({ nickname, gender, image });
  try {
    await Auth.authAnonymously();
  } catch (err: any) {
    throw err;
  }
}
