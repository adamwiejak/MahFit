import { GlobalSlice } from "../../store/types";

const KEYS_MAP = {
  user: "GUEST",
  themePref: "LOCAL_THEME_PREF",
};

const _remove = (k: string) => localStorage.removeItem(k);
const _get = (k: string) => localStorage.getItem(k) || null;
const _set = (k: string, v: any) => localStorage.setItem(k, JSON.stringify(v));

const getLocalThemePref = () => _get(KEYS_MAP.themePref);
const setLocalThemePref = (v: GlobalSlice["theme"]) =>
  _set(KEYS_MAP.themePref, v);
const removeLocalThemePref = () => _remove(KEYS_MAP.themePref);

const getLocalUser = () => _get(KEYS_MAP.user);
const setLocalUser = () => _set(KEYS_MAP.user, true);
const removeLocalUser = () => _remove(KEYS_MAP.user);

const LocalStorageAPI = {
  setLocalUser,
  getLocalUser,
  removeLocalUser,
  setLocalThemePref,
  getLocalThemePref,
  removeLocalThemePref,
};

export default LocalStorageAPI;
