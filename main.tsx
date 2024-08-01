import "./main.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import store from "./src/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./src/router/router";
import { Provider } from "react-redux";
import ThemeProvider from "./src/styles/MUI/ThemeProvider";
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
