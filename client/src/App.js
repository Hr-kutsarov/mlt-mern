import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from './components/Home.jsx'
import { Register } from './components/Register.jsx'
import { Logout } from './components/Logout.jsx'
import { Login } from './components/Login.jsx'
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
    // All views merged in a single one
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

