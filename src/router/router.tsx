import { createBrowserRouter, Navigate } from "react-router-dom";
import DevPage from "../components/views/DevPage/DevPage";
import NoFoundPage from "../components/views/NoPage/NoFoundPage";
import CalendarView from "../components/views/CalendarView/CalendarView";
import WorkoutsView from "../components/views/WorkoutsView/WorkoutsView";
import NoMatch from "../components/shared/no-match/NoMatch";

import AuthPage from "../components/views/AuthPage/AuthPage";
import HomePage from "../components/views/HomePage/HomePage";
import Root from "../components/layouts/root/Root";
import Landing from "../components/layouts/landing/Landing";
import Dashboard from "../components/layouts/dashboard/Dashboard";

import { authLoader, notImplemented } from "./loaders";

export const router = createBrowserRouter([
  { path: "_dev", element: <DevPage /> },
  /////

  {
    element: <Root />,
    errorElement: <NoFoundPage />,
    children: [
      {
        element: <Landing />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "auth/:task?", element: <AuthPage />, loader: authLoader },
        ],
      },

      {
        path: "/app",
        element: <Dashboard />,
        children: [
          {
            errorElement: <NoMatch />,
            children: [
              { index: true, element: <Navigate to="calendar" /> },
              { path: "calendar", element: <CalendarView /> },
              { path: "exercises", element: <WorkoutsView /> },
              { path: "group", element: <WorkoutsView />, loader: notImplemented },
              { path: "ranking", element: <WorkoutsView />, loader: notImplemented },
            ],
          },
        ],
      },
    ],
  },
]);
