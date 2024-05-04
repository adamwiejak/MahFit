import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../utils/User/types";
import { UserSlice } from "../types";

const initialState: UserSlice = {
  authToken: null,
  userData: null,
  cachedFriends: {},
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser(
      state,
      action: PayloadAction<{
        authToken: UserSlice["authToken"];
        userData: UserSlice["userData"];
      }>
    ) {
      const { userData, authToken } = action.payload;
      state.userData = userData;
      state.authToken = authToken;
    },

    clearUser() {
      return initialState;
    },

    removeFriend(state, action: PayloadAction<string>) {},

    cacheFriend(
      state,
      action: PayloadAction<{ uid: string; friend: User | null }>
    ) {
      const { uid, friend } = action.payload;
      const exists = state.cachedFriends.hasOwnProperty(uid);
      // if (!exists) state.cachedFriends[uid] = friend;
    },
  },
});

export default userSlice.reducer;
export const userSliceActions = userSlice.actions;
