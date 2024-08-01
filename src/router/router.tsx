import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "../components/views/Root";
import Landing from "../components/views/Landing/Landing";
import Dashboard from "../components/views/Dashboard/Dashboard";
import AuthPage from "../components/views/Landing/AuthPage/AuthPage";
import HomePage from "../components/views/Landing/HomePage/HomePage";
import DevPage from "../components/views/DevPage/DevPage";
import NoFoundPage from "../components/views/NoPage/NoFoundPage";
import CalendarView from "../components/views/Dashboard/_calendar/CalendarView";
import WorkoutsView from "../components/views/Dashboard/_workouts/WorkoutsView";
import NoMatch from "../components/shared/no-match/NoMatch";

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
        children: [
          {
            children: [
              { index: true, element: <Navigate to="calendar" /> },

              { path: "calendar", element: <CalendarView /> },

              { path: "exercises", element: <WorkoutsView /> },

              {
                path: "group",
                loader: L.notImplemented,
                element: <WorkoutsView />,
              },

              {
                path: "ranking",
                loader: L.notImplemented,
                element: <WorkoutsView />,
              },
            ],
            errorElement: <NoMatch />,
          },
        ],
      },
    ],
  },
]);
