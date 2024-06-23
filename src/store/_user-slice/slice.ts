import * as T from "./types";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction as P } from "@reduxjs/toolkit";

const initialState: T.UserSlice = {
  userData: null,
  accessToken: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser(state, action: P<T.SetUserAction>) {
      const { userData, accessToken } = action.payload;
      state.userData = userData;
      state.accessToken = accessToken;
    },

    clearUser() {
      return initialState;
    },
  },
});

export default userSlice;
