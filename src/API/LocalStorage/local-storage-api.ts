import { CachedUserData, GuestData, UserData } from "../User";

const KEYS_MAP = {
  guest: "GUEST",
  user: "USER_DATA",
  localUser: "LOCAL_USER_DATA",
  themePref: "LOCAL_THEME_PREF",
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

// GUEST DATA
export const getGuestData = () => _get<GuestData>(KEYS_MAP.guest);
export const setGuestData = (guest: GuestData) => _set(KEYS_MAP.guest, guest);

// LOCAL USER
export const getLocalUser = () => _get<UserData>(KEYS_MAP.localUser);
export const setLocalUser = (data: UserData) => _set(KEYS_MAP.localUser, data);

export const cleanLocalUser = () => {
  _remove(KEYS_MAP.guest);
  _remove(KEYS_MAP.localUser);
};

//  USER
export const delateCachedUser = () => _remove(KEYS_MAP.user);
export const getCachedUser = () => _get<CachedUserData>(KEYS_MAP.user);
export const cacheUser = (data: CachedUserData) => _set(KEYS_MAP.user, data);
