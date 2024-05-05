import { createSlice } from "@reduxjs/toolkit";
import * as T from "./types";

const initialState: T.UserSlice = {
  user: null,
  authToken: null,
  cachedFriends: {},
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser(state, action: T.SetUserAction) {
      const { user, authToken } = action.payload;
      state.user = user;
      state.authToken = authToken;
    },

    clearUser() {
      return initialState;
    },
  },
});

export default userSlice;
