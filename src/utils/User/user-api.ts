import LocalStorageAPI from "../LocalStorage/local-storage-api";
import Database from "../Firebase/database";
import Auth from "../Firebase/auth";
import { DUMMY_ACCOUNT } from "../../helpers/data/dummy-data";
import type { LoginUserData } from "./types";
import type { SinginUserData } from "./types";
import type { UserBaseInfo } from "./types";
import type { User } from "./types";

const getUserFromDB = async (uid: string): Promise<User> => {
  try {
    const user = await Database.getDocument<User>(`users/${uid}`);
    return user;
  } catch (err) {
    throw err;
  }
};

const setUserInDB = async (data: UserBaseInfo) => {
  try {
    await Database.setDocument(`users/${data.uid}`, { base: data });
  } catch (err) {
    throw err;
  }
};

const loginDemoAccount = async () => {
  LocalStorageAPI.setLocalUser();
  try {
    const { email, password } = DUMMY_ACCOUNT;
    const { user } = await Auth.createUserWithEmail(email, password);
    return user;
  } catch (err: any) {
    LocalStorageAPI.removeLocalUser();
    throw err;
  }
};

const singInWithGoogle = async () => {
  try {
    const provider = await Auth.authWithGoogle();
    return provider;
  } catch (err) {
    throw err;
  }
};

const singInWithFacebook = async () => {
  try {
    const provider = await Auth.authWithFacebook();
    return provider;
  } catch (err) {
    throw err;
  }
};

const singupUserWithEmail = async (data: SinginUserData) => {
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

const loginUserWithEmail = async (data: LoginUserData) => {
  console.log(data);
  try {
    alert(`Login User Here With Email, ${JSON.stringify(data)}`);
  } catch (err) {
    throw err;
  }
};

const retrivePassword = (email: string) => {
  return alert(`Retrieve password for ${email} here`);
};

const signOutUser = Auth.logoutUser;

const UserAPI = {
  signOutUser,
  loginDemoAccount,
  loginUserWithEmail,
  singupUserWithEmail,
  singInWithGoogle,
  singInWithFacebook,
  retrivePassword,
  setUserInDB,
  getUserFromDB,
};

export default UserAPI;
export * from "./types.d";
