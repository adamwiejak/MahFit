import { GlobalSlice } from "../../store/_global-slice";

const KEYS_MAP = {
  user: "GUEST",
  themePref: "LOCAL_THEME_PREF",
};

const _remove = (k: string) => localStorage.removeItem(k);
const _get = (k: string) => localStorage.getItem(k) || null;
const _set = (k: string, v: any) => localStorage.setItem(k, JSON.stringify(v));

export const getLocalThemePref = () => _get(KEYS_MAP.themePref);

export const setLocalThemePref = (v: GlobalSlice["theme"]) =>
  _set(KEYS_MAP.themePref, v);

export const removeLocalThemePref = () => _remove(KEYS_MAP.themePref);

export const getLocalUser = () => _get(KEYS_MAP.user);
export const setLocalUser = () => _set(KEYS_MAP.user, true);
export const removeLocalUser = () => _remove(KEYS_MAP.user);
