import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/root/Root";
import DevPage from "../components/views/DevPage/DevPage";
import NoFoundPage from "../components/views/NoPage/NoFoundPage";
import LandingLayout from "../components/layout/landing/LandingLayout";
import HomePage from "../components/views/HomePage/HomePage";
import AuthPage from "../components/views/AuthPage/AuthPage";
import Dashboard from "../components/layout/dashboard/Dashboard";
import * as L from "./loaders";

export const router = createBrowserRouter([
  { path: "_dev", element: <DevPage /> },
  {
    element: <Root />,
    errorElement: <NoFoundPage />,
    children: [
      {
        path: "/",
        element: <LandingLayout />,
        errorElement: <NoFoundPage />,
        children: [
          { index: true, element: <Navigate to="/home" /> },
          { path: "home", element: <HomePage /> },
          { path: "auth/:task?", element: <AuthPage />, loader: L.authLoader },
        ],
      },
      {
        path: "/app",
        element: <Dashboard />,
        errorElement: <NoFoundPage />,
        children: [],
      },
    ],
  },
]);
