import userSlice from "./slice";

export const userSliceReducer = userSlice.reducer;
export const userSliceActions = userSlice.actions;
export * from "../thunks";
export * from "./types.d";

export default userSlice;
