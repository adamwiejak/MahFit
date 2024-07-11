import { GuestData, User } from "../User";

const KEYS_MAP = {
  guest: "GUEST",
  localUser: "LOCAL_USER_DATA",
  themePref: "LOCAL_THEME_PREF",
};

const _set = (k: string, v: any) => {
  localStorage.setItem(k, JSON.stringify(v));
};

const _get = <T>(k: string) => {
  const item = localStorage.getItem(k);
  return item ? (JSON.parse(item) as T) : undefined;
};

const _remove = (k: string) => {
  return localStorage.removeItem(k);
};

// THEMEN PREF
export const setLocalTheme = (theme: Theme) => _set(KEYS_MAP.themePref, theme);
export const getLocalThemePref = () => _get<Theme>(KEYS_MAP.themePref);
export const removeLocalThemePref = () => _remove(KEYS_MAP.themePref);

// GUEST DATA
export const setGuestData = (guest: GuestData) => _set(KEYS_MAP.guest, guest);
export const getGuestData = () => _get<GuestData>(KEYS_MAP.guest);

//  LOCAL USER
export const setLocalUser = (data: User) => _set(KEYS_MAP.localUser, data);
export const getLocalUser = () => _get<User>(KEYS_MAP.localUser);

export const cleanLocalUser = () => {
  _remove(KEYS_MAP.guest);
  _remove(KEYS_MAP.localUser);
};
