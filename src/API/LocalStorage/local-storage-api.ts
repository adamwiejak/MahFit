import { UserData } from "../../utils/Firebase/database";
import { Uid } from "../User";
import { CachedTempSigninData, CachedTempGuestData, chachedDummyFriends } from "./types";

const KEYS_MAP = {
  guest: "TEMP_GUEST_DATA",
  localUser: "LOCAL_USER_DATA",
  signinData: "TEMP_SIGN_IN_DATA",
  cachedFriends: "CACHED_FRIENDS",
  // themePref: "LOCAL_THEME_PREF",
};

function _set(k: string, v: any) {
  localStorage.setItem(k, JSON.stringify(v));
}

function _get<T>(k: string) {
  const item = localStorage.getItem(k);
  return item ? (JSON.parse(item) as T) : undefined;
}

function _remove(k: string) {
  return localStorage.removeItem(k);
}

// THEMEN PREF
// export const setLocalTheme = (theme: Theme) => _set(KEYS_MAP.themePref, theme);
// export const getLocalThemePref = () => _get<Theme>(KEYS_MAP.themePref);
// export const removeLocalThemePref = () => _remove(KEYS_MAP.themePref);

// TEMPORARY GUEST DATA
export const setGuestData = (guest: CachedTempGuestData) => _set(KEYS_MAP.guest, guest);
export const getGuestData = () => _get<CachedTempGuestData>(KEYS_MAP.guest);
export const removeGuestData = () => _remove(KEYS_MAP.guest);

// TEMPORARY SINGIN USER DATA
export const setSigninData = (data: CachedTempSigninData) => _set(KEYS_MAP.signinData, data);
export const getSigninData = () => _get<CachedTempSigninData>(KEYS_MAP.signinData)!;
export const removeSigninData = () => _remove(KEYS_MAP.signinData);

// LOCAL USER DATA
export const setLocalUser = (data: UserData) => _set(KEYS_MAP.localUser, data);
export const getLocalUser = () => _get<UserData>(KEYS_MAP.localUser);
export const removeLocalUser = () => _remove(KEYS_MAP.localUser);

// CACHE DUMMY USERS
export function getCachedFriend(uid: Uid) {
  const cachedFriends = _get<chachedDummyFriends>(KEYS_MAP.cachedFriends);
  if (!cachedFriends) return undefined;
  console.log("returned cached dummy friend data");
  return cachedFriends[uid];
}

export function setCachedFriend(data: UserData) {
  const cachedFriends = _get<chachedDummyFriends>(KEYS_MAP.cachedFriends) || {};
  cachedFriends[data.base.uid] = data;
  _set(KEYS_MAP.cachedFriends, cachedFriends);
}
