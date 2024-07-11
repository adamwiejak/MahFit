import * as T from "./types";
import { Auth, Database } from "../../utils/Firebase";
import LocalStorageAPI from "../LocalStorage";
import { DUMMY_EVENTS } from "../../helpers/data/dummy-data";
import { User as UserImpl } from "firebase/auth";

async function _cleanUpLocalUser(user: UserImpl) {
  try {
    await Auth.delateAccount(user);
    LocalStorageAPI.cleanLocalUser();
  } catch (err) {
    throw err;
  }
}

async function _createLocalUser(): Promise<T.User> {
  const { gender, nickname, image } = LocalStorageAPI.getGuestData()!;
  const { uid } = Auth.getCurrentUser()!;

  try {
    const dummyFriends = await Database.getColection<T.User[]>(`dummy-users`);
    const friendsList = dummyFriends.map(({ base }) => {
      return { uid: base.uid, isFav: Math.random() > 0.5 };
    });

    const dummyUser: T.User = {
      base: { email: "guest@example.com", uid, gender, nickname },
      details: { photoURL: image, friendsList, workouts: DUMMY_EVENTS },
    };

    LocalStorageAPI.setLocalUser(dummyUser);
    return dummyUser;
  } catch (err) {
    throw err;
  }
}

export function getCurrentUser() {
  return Auth.getCurrentUser();
}

export async function logoutUser() {
  const user = Auth.getCurrentUser()!;
  const guest = LocalStorageAPI.getLocalUser();

  try {
    await Auth.logoutUser();
    if (guest) await _cleanUpLocalUser(user);
  } catch (err) {
    throw err;
  }
}

export function singInWithGoogle() {
  return Auth.authWithGoogle();
}

export function singInWithFacebook() {
  return Auth.authWithFacebook();
}

export async function createUserWithEmail(data: T.SinginUserData) {
  const { email, password, gender, nickname } = data;
  try {
    const { user } = await Auth.createUserWithEmail(email, password);
    await setUserInDB({ uid: user.uid, email, nickname, gender });
  } catch (err) {
    throw err;
  }
}

export async function signInUserWithEmail(data: T.LoginUserData) {
  const { email, password } = data;
  return Auth.signInWithEmail(email, password);
}

export async function retrivePassword(email: string) {
  return Auth.resetPassword(email);
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

export function getUserFromDB(uid: string) {
  return Database.getDocument<T.User>(`users/${uid}`);
}

export function getUsersFromDB(uids: string[]) {
  // FIXME:
  const guest = LocalStorageAPI.getLocalUser();
  const promise = uids.map((uid) =>
    Database.getDocument<T.User>(`${guest ? "dummy-users" : "users"}/${uid}`)
  );
  return Promise.all(promise);
}

export function setUserInDB(data: T.UserBaseInfo) {
  return Database.setDocument("users", data.uid, { base: data });
}

export async function getLocalUser() {
  let localUser = LocalStorageAPI.getLocalUser();

  try {
    if (!localUser) localUser = await _createLocalUser();
    return localUser;
  } catch (err) {
    throw err;
  }
}
