import { Gender } from "../User";

export type Guest = { nickname: string; gender: Gender };

const KEYS_MAP = {
  user: "GUEST",
  themePref: "LOCAL_THEME_PREF",
};

const _set = (k: string, v: any) => {
  localStorage.setItem(k, JSON.stringify(v));
};

const _get = <T>(k: string) => {
  const item = localStorage.getItem(k);
  return item ? (JSON.parse(item) as T) : undefined;
};

const _remove = (k: string) => localStorage.removeItem(k);

// THEMEN PREF
export const setLocalTheme = (theme: Theme) => _set(KEYS_MAP.themePref, theme);
export const getLocalThemePref = () => _get<Theme>(KEYS_MAP.themePref);
export const removeLocalThemePref = () => _remove(KEYS_MAP.themePref);

// GUEST LOCAL USER
export const setLocalUser = (guest: Guest) => _set(KEYS_MAP.user, guest);
export const getLocalUser = () => _get<Guest>(KEYS_MAP.user);
export const removeLocalUser = () => _remove(KEYS_MAP.user);
