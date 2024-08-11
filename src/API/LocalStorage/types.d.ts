import { UserData } from "../../utils/Firebase/database";
import { Gender, SinginData, Uid } from "../User";

export type chachedDummyFriends = { [uid: Uid]: UserData };
export type CachedTempSigninData = Omit<SinginData, "password">;
export type CachedTempGuestData = { photoURL: string; gender: Gender; nickname: string };
