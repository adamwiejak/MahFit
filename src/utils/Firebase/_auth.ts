import firebaseApp from "./_init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { deleteUser } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { signInAnonymously } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import type { NextOrObserver, User as UserImpl } from "firebase/auth";

export const _auth = getAuth(firebaseApp);

export function getCurrentUser() {
  return _auth.currentUser;
}

export function logoutUser() {
  return signOut(_auth);
}

export function authStateObserver(observer: NextOrObserver<UserImpl>) {
  return onAuthStateChanged(_auth, observer);
}

export function createUserWithEmail(email: string, password: string) {
  return createUserWithEmailAndPassword(_auth, email, password);
}

export function signInWithEmail(email: string, password: string) {
  return signInWithEmailAndPassword(_auth, email, password);
}

export function authAnonymously() {
  return signInAnonymously(_auth);
}

export function authWithFacebook() {
  const googleProvider = new FacebookAuthProvider();
  return signInWithPopup(_auth, googleProvider);
}

export function authWithGoogle() {
  const googleProvider = new GoogleAuthProvider();
  return signInWithPopup(_auth, googleProvider);
}

export function resetPassword(email: string) {
  return sendPasswordResetEmail(_auth, email);
}

export function delateAccount(user: UserImpl) {
  return deleteUser(user);
}
