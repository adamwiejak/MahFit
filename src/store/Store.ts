import logger from "redux-logger";
import userSliceReducer from "./_user-slice/slice";
import globalSliceReducer from "./_global-slice/slice";
import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import type { TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "./types";

// export var dev = process.env.NODE_ENV === "development";
export var dev = false;

// const devMiddlewares = dev ? [logger] : [];
const devMiddlewares = dev ? [] : [];

const rootReducer = {
  globalSlice: globalSliceReducer,
  userSlice: userSliceReducer,
};

export const store = configureStore({
  devTools: dev,
  reducer: rootReducer,
  middleware: (getDefault) => getDefault().concat(devMiddlewares),
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const getStore = () => useAppSelector((S) => S);
export const getUserSlice = () => useAppSelector((S) => S.userSlice);
export const getGlobalSlice = () => useAppSelector((S) => S.globalSlice);
export default store;
