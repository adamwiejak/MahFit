import { createSlice } from "@reduxjs/toolkit";
import type * as T from "./types";

const _dayStart = 6;
const _nightStart = 19;

const initialState: T.GlobalSlice = {
  isOnline: true,
  theme: undefined,
  inProgress: true,
};

const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    getAutoTheme(state) {
      const date = new Date();
      const time = +(date.getHours() + date.getMinutes() / 60).toFixed(2);
      state.theme = time > _dayStart && time < _nightStart ? "light" : "dark";
    },

    setOnlineStatus(state, action: T.SetOnlineStatusAction) {
      state.isOnline = action.payload;
    },

    setInProgress(state, action: T.SetInProgressAction) {
      state.inProgress = action.payload;
    },

    toggleTheme(state, action: T.ToggleThemeAction) {
      const payload = action.payload;
      if (payload) state.theme = payload;
      if (!payload) state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export default globalSlice;
