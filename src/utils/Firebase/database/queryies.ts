import { Uid } from "../../../API/User";
import { where, query } from "firebase/firestore";
import { createColectionRef, createDocumentRef } from "./database";

export const usersQuery = createColectionRef("users");
export const dummyUsersQuery = query(createColectionRef("users"), where("isDummy", "==", true));
export const getUserDocumentQuery = (uid: Uid) => createDocumentRef(`users/${uid}`);
