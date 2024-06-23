import firebaseApp from "./_init";
import { getFirestore } from "firebase/firestore";
import { getDoc, setDoc, addDoc, getDocs } from "firebase/firestore";
import { collection, doc } from "firebase/firestore";
import {
  noColectionResponse,
  noDocumentResponse,
} from "../../helpers/responses";
import type { DocumentData, WithFieldValue } from "firebase/firestore";

const _database = getFirestore(firebaseApp);

export function addDocument(path: string, data: WithFieldValue<DocumentData>) {
  const colRef = collection(_database, path);
  return addDoc(colRef, data);
}

export function setDocument(
  colPath: string,
  docId: string,
  data: WithFieldValue<DocumentData>
) {
  const docRef = doc(_database, colPath, docId);
  return setDoc(docRef, data);
}

export async function getDocument<T = unknown>(path: string) {
  try {
    const docSnapshot = await getDoc(doc(_database, path));
    if (!docSnapshot.exists()) throw noDocumentResponse;
    return docSnapshot.data() as T;
  } catch (err) {
    throw err;
  }
}

export async function getColection<T>(path: string) {
  try {
    const colSnapshot = await getDocs(collection(_database, path));
    if (!colSnapshot) throw noColectionResponse;

    const data: DocumentData[] = [];
    colSnapshot.forEach((doc) => data.push(doc.data()));
    return data as T;
  } catch (err) {
    throw err;
  }
}
