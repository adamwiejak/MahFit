import "./styles/index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store/Store";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { Provider } from "react-redux";
import ThemeProvider from "./styles/MUI/ThemeProvider";
import { SnackbarProvider } from "notistack";

export const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider>
      <SnackbarProvider maxSnack={5} preventDuplicate>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </ThemeProvider>
  </Provider>
  // </React.StrictMode>
);
