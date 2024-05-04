import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { GlobalSlice } from "../types";

const dayStart = 6;
const nightStart = 19;

const initialState: GlobalSlice = {
  isOnline: true,
  theme: undefined,
  inProgress: false,
};

const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    setOnlineStatus(state, action: PayloadAction<GlobalSlice["isOnline"]>) {
      state.isOnline = action.payload;
    },

    setInProgress(state, action: PayloadAction<GlobalSlice["inProgress"]>) {
      state.inProgress = action.payload;
    },

    getAutoTheme(state) {
      const date = new Date();
      const time = +(date.getHours() + date.getMinutes() / 60).toFixed(2);
      state.theme = time > dayStart && time < nightStart ? "light" : "dark";
    },

    toggleTheme(state, action: PayloadAction<GlobalSlice["theme"]>) {
      const payload = action.payload;
      if (payload) state.theme = payload;
      if (!payload) state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export default globalSlice.reducer;
export const globalSliceActions = globalSlice.actions;
