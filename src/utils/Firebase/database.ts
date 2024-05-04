import { database } from "./init";
import { setDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import type { DocumentData, WithFieldValue } from "firebase/firestore";

const noDocument = () =>
  new Response(null, {
    status: 404,
    statusText: "No Document Found",
  });

const getDocument = async <T = unknown>(path: string) => {
  const docRef = doc(database, path);
  try {
    const docSnapshot = await getDoc(docRef);
    if (!docSnapshot.exists()) throw noDocument();

    return docSnapshot as T;
  } catch (err) {
    throw err;
  }
};

const setDocument = async <T>(
  path: string,
  data: WithFieldValue<DocumentData>
) => {
  const docRef = doc(database, path);
  return setDoc(docRef, data);
};

const getColection = async <T>(path: string) => {
  return alert("to impolement");
  const colRef = collection(database, path);
  try {
    const colSnapshot = await getDocs(colRef);
    if (colSnapshot) {
      const data: DocumentData[] = [];
      colSnapshot.forEach((doc) => data.push(doc.data()));
      return data;
    } else {
      throw new Response(null, {
        status: 404,
        statusText: "No Colection Found",
      });
    }
  } catch (err) {
    throw err;
  }
};

const Database = { getColection, setDocument, getDocument };

export default Database;
