import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from './components/Home.jsx'
import { Register } from './components/Auth/Register.jsx'
import { Logout } from './components/Auth/Logout.jsx'
import { Login } from './components/Auth/Login.jsx'
import { Profile } from './components/Profile/Profile';
import { ErrorPage } from './ErrorPage';

import { Devlogs } from './components/Body/DevlogEntries/Devlogs'
import { CalendarView } from './components/Body/EventReel/CalendarView';

import { AddEvent } from './components/Body/EventReel/AddEvent';
import { EditEvent } from './components/Body/EventReel/EditEvent';
import { DeleteEvent } from './components/Body/EventReel/DeleteEvent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login/",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "register/",
    element: <Register />,
    errorElement: <ErrorPage />
  },
  {
    path: "logout",
    element: <Logout />,
    errorElement: <ErrorPage />
  },
  {
    path: "profile/",
    element: <Profile />,
    errorElement: <ErrorPage />
  },
  {
    path: "edit-event/",
    element: <EditEvent />,
    errorElement: <ErrorPage />
  },
  {
    path: "add-event/",
    element: <AddEvent />,
    errorElement: <ErrorPage />
  },
  {
    path: "delete-event/",
    element: <DeleteEvent />,
    errorElement: <ErrorPage />
  },
  {
    // SPA within one component
    path: "devlog/",
    element: <Devlogs />,
    errorElement: <ErrorPage />
  },
  {
    path: "calendar-view/",
    element: <CalendarView />,
    errorElement: <ErrorPage />
  }
]);


export function App() {
  return (
    <RouterProvider router={router} />
  );
}

