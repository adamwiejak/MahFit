import * as T from "./types";
import LocalStorageAPI from "../LocalStorage";
import { User as UserImpl } from "firebase/auth";
import Auth from "../../utils/Firebase/auth";
import Database from "../../utils/Firebase/database";
import {
  fillDummyUser,
  generateDummyWorkouts,
} from "../../helpers/functions/dummy-data";

// AUTHENTICATION
export async function createUserWithEmail(data: T.SinginUserData) {
  const { email, password, gender, nickname, date } = data;
  LocalStorageAPI.cacheUser({
    email,
    gender,
    nickname,
    photoURL: undefined,
    birthDate: date.toDateString(),
  });
  try {
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
export async function getUser(uid: T.Uid) {
  try {
    const userData = await Database.getUserData(uid);
    if (!userData) return undefined;
    if (userData.isDummy) await fillDummyUser(userData);
    return userData;
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

async function _createLocalUser() {
  const localUser = LocalStorageAPI.getGuestData();
  const userImpl = Auth.getCurrentUser();
  if (!localUser || !userImpl) return undefined;
  const uid = userImpl.uid;
  const email = "guest@example.com";
  const birthDate = new Date().toDateString();
  const { gender, nickname, image } = localUser;
  const workouts = generateDummyWorkouts(15, uid);

  try {
    const { getColection } = Database;
    const dummyFriends = await getColection<T.UserData[]>(
      Database.dummyUsersQuery
    );

    const friendsList = dummyFriends.map(({ base }) => {
      return { uid: base.uid, isFav: Math.random() > 0.5 };
    });

    const base = { email, uid, gender, nickname, birthDate, photoURL: image };
    const details = { friendsList, workouts, records: {} };
    const userData: T.UserData = { base, details, isDummy: true };
    LocalStorageAPI.setLocalUser(userData);
    return userData;
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
