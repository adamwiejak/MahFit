import firebaseApp from "../_init";
import { Uid, UserData } from "../../../API/User";
import { DocumentData } from "firebase/firestore";
import { WithFieldValue } from "firebase/firestore";
import { getDoc, setDoc, doc } from "firebase/firestore";
import { where, query, Query } from "firebase/firestore";
import { DocumentReference, getFirestore } from "firebase/firestore";
import { collection, getDocs, deleteDoc } from "firebase/firestore";
import User from "../../../classes/User";

const _database = getFirestore(firebaseApp);

export const usersQuery = createColectionRef("users");

export const dummyUsersQuery = query(
  createColectionRef("users"),
  where("isDummy", "==", true)
);

/////////////////////////////////////////////////////////////////////////

export function createColectionRef(path: string) {
  return collection(_database, path);
}

export function createDocumentRef(path: string) {
  return doc(_database, path);
}

export function setDocument(
  docRef: DocumentReference<DocumentData>,
  data: WithFieldValue<DocumentData>
) {
  return setDoc(docRef, data);
}

export function deleteDocument(docRef: DocumentReference) {
  return deleteDoc(docRef);
}

export async function getDocument<T>(docRef: DocumentReference) {
  try {
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) throw new Error(`not exist`);
    return snapshot.data() as T;
  } catch (err) {
    throw err;
  }
}

export async function getColection<T>(query: Query) {
  try {
    const data: DocumentData[] = [];
    const snapshot = await getDocs(query);
    snapshot.forEach((doc) => data.push(doc.data()));
    return data as T;
  } catch (err) {
    throw err;
  }
}

///////// User /////////
export function createUserQuery(uid: Uid) {
  return doc(_database, `users/${uid}`);
}

export async function setUserInDB(user: User) {
  const uid = user.getUid();
  const userData = user.getUserData();
  try {
    await setDocument(createUserQuery(uid), userData);
  } catch (err) {
    throw err;
  }
}

export async function getUserData(uid: Uid) {
  const userQuery = createUserQuery(uid);
  try {
    const snapshot = await getDoc(userQuery);
    return snapshot.exists() ? (snapshot.data() as UserData) : undefined;
  } catch (err) {
    throw err;
  }
}

export * from "firebase/firestore";
export * as Database from "./database";
