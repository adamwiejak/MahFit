import { Auth, Storage, Database } from "../../utils/Firebase";
import { DUMMY_ACCOUNT } from "../../helpers/data/dummy-data";
import * as T from "./types";
import LocalStorage from "../LocalStorage";

export const getCurrentUser = () => {
  const currUser = Auth.getCurrentUser();
  console.log(currUser);
  return currUser;
};

export const logoutUser = () => {
  const response = Auth.logoutUser();
  return response;
};

export const getUserFromDB = async (uid: string): Promise<T.User> => {
  try {
    const user = await Database.getDocument<T.User>(`users/${uid}`);
    return user;
  } catch (err) {
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
    const provider = await Auth.authWithFacebook();
    return provider;
  } catch (err) {
    throw err;
  }
};

export const singupUserWithEmail = async (data: T.SinginUserData) => {
  const { email, password, gender, nickname } = data;

  try {
    const { user } = await Auth.createUserWithEmail(email, password);
    console.log(user);

    // const userBaseInfo: UserBaseInfo = {
    //   uid: user.uid,
    //   email,
    //   nickname,
    //   gender,
    // };

    // await setUserInDB(userBaseInfo);
  } catch (err) {
    throw err;
  }
};

export const loginUserWithEmail = async (data: T.LoginUserData) => {
  console.log(data);
  try {
    alert(`Login User Here With Email, ${JSON.stringify(data)}`);
  } catch (err) {
    throw err;
  }
};

export const retrivePassword = (email: string) => {
  return alert(`Retrieve password for ${email} here`);
};
