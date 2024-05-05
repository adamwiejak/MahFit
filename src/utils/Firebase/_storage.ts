import { firebaseApp } from "./_init";
import { getStorage, ref } from "firebase/storage";
import { uploadBytes } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { deleteObject } from "firebase/storage";

const storage = getStorage(firebaseApp);

export const firebaseUploadFile = async (file: File, storagePath: string) => {
  const fileRef = ref(storage, storagePath);
  await uploadBytes(fileRef, file);
};

export const firebaseDeleteFile = async (storagePath: string) => {
  const fileRef = ref(storage, storagePath);
  deleteObject(fileRef);
};

export const firebaseGetUrl = async (storagePath: string) => {
  const fileRef = ref(storage, storagePath);

  try {
    const url = await getDownloadURL(fileRef);
    return url;
  } catch (err) {
    throw err;
  }
};
