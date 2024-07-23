import firebaseApp from "./_init";
import { DocumentReference, getFirestore, Query } from "firebase/firestore";
import { getDoc, setDoc, doc } from "firebase/firestore";
import { collection, getDocs, deleteDoc } from "firebase/firestore";
import { DocumentData } from "firebase/firestore";
import { WithFieldValue } from "firebase/firestore";

const _database = getFirestore(firebaseApp);

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

export * from "firebase/firestore";
