import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/root/Root";
import DevPage from "../components/views/DevPage/DevPage";
import NoFoundPage from "../components/views/NoPage/NoFoundPage";
import LandingLayout from "../components/layout/landing/LandingLayout";
import HomePage from "../components/views/HomePage/HomePage";
import AuthPage from "../components/views/AuthPage/AuthPage";
import DashboardLayout from "../components/layout/dashboard/DashboardLayout";
import HomeView from "../components/views/Dashbard/HomeView/HomeView";
import WorkoutsView from "../components/views/Dashbard/WorkoutsView/WorkoutsView";

import * as L from "./loaders";

export const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <NoFoundPage />,
    children: [
      {
        element: <LandingLayout />,
        children: [
          { index: true, element: <Navigate to="/home" /> },
          { path: "home", element: <HomePage /> },
          { path: "auth/:task?", element: <AuthPage />, loader: L.authLoader },
        ],
      },

      {
        path: "/app",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <HomeView /> },
          { path: "workouts", element: <WorkoutsView /> },
        ],
      },

      { path: "_dev", element: <DevPage /> },
    ],
  },
]);
