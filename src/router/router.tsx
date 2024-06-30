import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "../components/views/Root";
import Landing from "../components/views/Landing/Landing";
import Dashboard from "../components/views/Dashboard/Dashboard";
import AuthPage from "../components/views/Landing/AuthPage/AuthPage";
import HomePage from "../components/views/Landing/HomePage/HomePage";
import DevPage from "../components/views/DevPage/DevPage";
import NoFoundPage from "../components/views/NoPage/NoFoundPage";
import HomeView from "../components/views/Dashboard/_app-home/HomeView";
import WorkoutsView from "../components/views/Dashboard/_app-workouts/WorkoutsView";

import * as L from "./loaders";

export const router = createBrowserRouter([
  { path: "_dev", element: <DevPage /> },

  {
    element: <Root />,
    errorElement: <NoFoundPage />,
    children: [
      {
        element: <Landing />,
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
        children: [
          { index: true, element: <HomeView /> },
          { path: "workouts", element: <WorkoutsView /> },
        ],
      },
    ],
  },
]);
