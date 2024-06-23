import firebaseApp from "./_init";
import { getStorage, ref } from "firebase/storage";
import { uploadBytes } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { deleteObject } from "firebase/storage";
import { TaskResponse } from "../../classes/TaskResponse";

const _storage = getStorage(firebaseApp);

// const paths = {
//   user: "user",
// };

// const getPath = () => {};

export const uploadFile = (file: File, storagePath: string) => {
  return uploadBytes(ref(_storage, storagePath), file);
};

export const deleteFile = (storagePath: string) => {
  return deleteObject(ref(_storage, storagePath));
};

export async function getUrl(storagePath: string) {
  try {
    return await getDownloadURL(ref(_storage, storagePath));
  } catch (err: any) {
    const response = new TaskResponse(err);
    response.displaySnackbar();
  }
}
