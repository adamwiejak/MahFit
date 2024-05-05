import { firebaseApp } from "./_init";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { signInAnonymously } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import type { NextOrObserver, User as UserImpl } from "firebase/auth";

export const auth = getAuth(firebaseApp);

export const getCurrentUser = () => auth.currentUser;
export const logoutUser = () => signOut(auth);

export const authStateObserver = (observer: NextOrObserver<UserImpl>) => {
  return onAuthStateChanged(auth, observer);
};

export const signInWithEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const authAnonymously = () => signInAnonymously(auth);

export const authWithFacebook = () => {
  alert("Google Provider Here");
  const facebookProvider = new FacebookAuthProvider();

  try {
    signInWithPopup(auth, facebookProvider);
    return facebookProvider;
  } catch (err) {
    throw err;
  }
};

export const authWithGoogle = async () => {
  alert("Google Provider Here");
  const googleProvider = new GoogleAuthProvider();

  try {
    signInWithPopup(auth, googleProvider);
    return googleProvider;
  } catch (err) {
    throw err;
  }
};

export const createUserWithEmail = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
