import type * as T from "./types";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction as P } from "@reduxjs/toolkit";
import { dayStart, nightStart } from "../../helpers/data/const";

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
      state.theme = time > dayStart && time < nightStart ? "light" : "dark";
    },

    setOnlineStatus(state, action: P<T.SetOnlineStatusAction>) {
      state.isOnline = action.payload;
    },

    toggleInProgress(state, action: P<T.ToggleInProgressAction>) {
      if (action.payload !== undefined) state.inProgress = action.payload;
      if (action.payload === undefined) state.inProgress = !state.inProgress;
    },

    toggleTheme(state, action: P<T.ToggleThemeAction>) {
      const toggleTo = state.theme === "dark" ? "light" : "dark";
      state.theme = action.payload || toggleTo;
    },
  },
});

export default globalSlice;
