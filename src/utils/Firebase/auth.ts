import { auth } from "./init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInAnonymously } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import type { NextOrObserver, User as UserImpl } from "firebase/auth";

const getCurrentUser = () => auth.currentUser;

const logoutUser = () => signOut(auth);

const authStateObserver = (observer: NextOrObserver<UserImpl>) => {
  return onAuthStateChanged(auth, observer);
};

const authAnonymously = () => signInAnonymously(auth);

const authWithFacebook = async () => {
  alert("Google Provider Here");
  const facebookProvider = new FacebookAuthProvider();
  try {
    signInWithPopup(auth, facebookProvider);
    return facebookProvider;
  } catch (err) {
    throw err;
  }
};

const authWithGoogle = async () => {
  alert("Google Provider Here");
  const googleProvider = new GoogleAuthProvider();
  try {
    signInWithPopup(auth, googleProvider);
    return googleProvider;
  } catch (err) {
    throw err;
  }
};

const createUserWithEmail = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const Auth = {
  logoutUser,
  getCurrentUser,
  authStateObserver,
  authWithFacebook,
  authWithGoogle,
  authAnonymously,
  createUserWithEmail,
};

export default Auth;
