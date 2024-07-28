import firebaseApp from "../_init";
import { getStorage, ref } from "firebase/storage";
import { uploadBytes } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { deleteObject } from "firebase/storage";
import { TaskError } from "../../../classes/TaskError";

const _storage = getStorage(firebaseApp);

export const uploadFile = (file: File, storagePath: string) => {
  return uploadBytes(ref(_storage, storagePath), file);
};

export const deleteFile = (storagePath: string) => {
  return deleteObject(ref(_storage, storagePath));
};

export async function getURL(storagePath: string) {
  try {
    return await getDownloadURL(ref(_storage, storagePath));
  } catch (err: any) {
    const response = new TaskError(err);
    response.displaySnackbar();
  }
}
