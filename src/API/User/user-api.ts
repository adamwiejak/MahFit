import * as T from "./types";
import { Auth, Database, Storage } from "../../utils/Firebase";
import LocalStorageAPI from "../LocalStorage";
import { DUMMY_EVENTS } from "../../helpers/data/dummy-data";
import { User as UserImpl } from "firebase/auth";

export function getCurrentUser() {
  return Auth.getCurrentUser();
}

async function cleanUpLocalUser(user: UserImpl) {
  LocalStorageAPI.removeLocalUser();
  try {
    await Storage.deleteFile(`avatars/${user.uid}`);
    await Auth.delateAccount(user);
  } catch (err) {
    throw err;
  }
}

export async function logoutUser() {
  const guest = LocalStorageAPI.getLocalUser();
  const user = Auth.getCurrentUser()!;

  try {
    await Auth.logoutUser();
    if (guest) await cleanUpLocalUser(user);
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

export function signInUserWithEmail(data: T.LoginUserData) {
  return Auth.signInWithEmail(data.email, data.password);
}

export const retrivePassword = (email: string) => {
  return Auth.resetPassword(email);
};

export async function openDemo(guest: T.SinginDemoUserData) {
  const { nickname, image, gender } = guest;
  LocalStorageAPI.setLocalUser({ nickname, gender });

  try {
    const { user } = await Auth.authAnonymously();
    await Storage.uploadFile(image, `avatars/${user.uid}`);
  } catch (err: any) {
    throw err;
  }
}

export function getUserFromDB(uid: string): Promise<T.User> {
  return Database.getDocument<T.User>(`users/${uid}`);
}

export function setUserInDB(data: T.UserBaseInfo) {
  return Database.setDocument("users", data.uid, { base: data });
}

export async function createLocalUser(user: UserImpl): Promise<T.User> {
  const guest = LocalStorageAPI.getLocalUser();

  // TODO: update local storage user to valid User object {base, details} with dummy data

  try {
    const dummyFriends = await Database.getColection<T.User[]>(`dummy-users`);
    const photoURL = await Storage.getUrl(`avatars/${user.uid}`);
    console.log(dummyFriends);

    const friendsList = dummyFriends.map(({ base }) => {
      return { uid: base.uid, isFav: Math.random() > 0.5 };
    });

    const dummyUser: T.User = {
      base: {
        uid: user.uid,
        email: "guest@example.com",
        gender: guest?.gender || "other",
        nickname: guest?.nickname || "Guest",
      },
      details: { photoURL, friendsList, workouts: DUMMY_EVENTS },
    };

    return dummyUser;
  } catch (err) {
    throw err;
  }
}
