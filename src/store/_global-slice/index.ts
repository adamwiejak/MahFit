import globalSlice from "./slice";

export const globalSliceReducer = globalSlice.reducer;
export const globalSliceActions = globalSlice.actions;
export * from "./thunks";
export * from "./types.d";

export default globalSlice;
