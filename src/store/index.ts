import logger from "redux-logger";
import userSlice from "./_user-slice";
import GlobalSlice from "./_global-slice";
import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import type { TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "./types";

///////DEV//////////
export const isDev = process.env.NODE_ENV === "development";
const devMiddlewares = isDev ? [logger] : [];
///////////////////

const rootReducer = {
  globalSlice: GlobalSlice.reducer,
  userSlice: userSlice.reducer,
};

export const store = configureStore({
  devTools: isDev,
  reducer: rootReducer,
  // middleware: (getDefault) => getDefault().concat(devMiddlewares),
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const getStore = () => useAppSelector((S) => S);
export const getUserSlice = () => useAppSelector((S) => S.userSlice);
export const getGlobalSlice = () => useAppSelector((S) => S.globalSlice);
export default store;
