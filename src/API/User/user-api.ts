import { Auth, Storage, Database } from "../../utils/Firebase";
import { DUMMY_ACCOUNT } from "../../helpers/data/dummy-data";
import * as T from "./types";
import LocalStorage from "../LocalStorage";
import { noDocument, noUser } from "../../helpers/responses";

export const getCurrentUser = () => Auth.getCurrentUser();
export const logoutUser = () => Auth.logoutUser();

export const getUserFromDB = async (uid: string): Promise<T.User> => {
  try {
    const userData = await Database.getDocument<T.User>(`users/${uid}`);
    console.log(userData);
    return userData;
  } catch (err: any) {
    if (err.message === noDocument) throw new Error(noUser);
    throw err;
  }
};

export const setUserInDB = async (data: T.UserBaseInfo) => {
  try {
    await Database.setDocument(`users/${data.uid}`, { base: data });
  } catch (err) {
    throw err;
  }
};

export const loginDemoAccount = async () => {
  LocalStorage.setLocalUser();
  try {
    const { email, password } = DUMMY_ACCOUNT;
    const { user } = await Auth.createUserWithEmail(email, password);
    return user;
  } catch (err: any) {
    LocalStorage.removeLocalUser();
    throw err;
  }
};

export const singInWithGoogle = async () => {
  try {
    const provider = await Auth.authWithGoogle();
    return provider;
  } catch (err) {
    throw err;
  }
};

export const singInWithFacebook = async () => {
  try {
    const provider = Auth.authWithFacebook();
    return provider;
  } catch (err) {
    throw err;
  }
};

export const singupUserWithEmail = async (data: T.SinginUserData) => {
  const { email, password, gender, nickname } = data;

  try {
    const { user } = await Auth.createUserWithEmail(email, password);
    await setUserInDB({ uid: user.uid, email, nickname, gender });
  } catch (err) {
    throw err;
  }
};

export const loginUserWithEmail = async (data: T.LoginUserData) => {
  try {
    await Auth.signInWithEmail(data.email, data.password);
  } catch (err) {
    throw err;
  }
};

export const retrivePassword = (email: string) => {
  return alert(`Retrieve password for ${email} here`);
};
