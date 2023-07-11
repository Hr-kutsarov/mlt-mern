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
import { DetailsView } from './components/Body/EventReel/DetailsView'

import { AllEvents } from './components/Body/EventReel/AllEvents';
import { AddEvent } from './components/Body/EventReel/AddEvent';
import { EditEvent } from './components/Body/EventReel/EditEvent';
import { DeleteEvent } from './components/Body/EventReel/DeleteEvent';

import { ArtistDetails } from './components/Body/Artists/ArtistDetails';
import { ArtistDelete } from './components/Body/Artists/ArtistDelete'
import { ArtistCreate } from './components/Body/Artists/ArtistCreate';
import { ArtistEdit } from './components/Body/Artists/ArtistEdit';


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
    path: "events/",
    element: <AllEvents />,
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
  },
  {
    path: "details-view/",
    element: <DetailsView />,
    errorElement: <ErrorPage />
  },
  {
    path: "details-artist/",
    element: <ArtistDetails />,
    errorElement: <ErrorPage />
  },
  {
    path: "delete-artist/",
    element: <ArtistDelete />,
    errorElement: <ErrorPage />
  },
  {
    path: "add-artist/",
    element: <ArtistCreate />,
    errorElement: <ErrorPage />
  },
  {
    path: "edit-artist/",
    element: <ArtistEdit />,
    errorElement: <ErrorPage />
  }
]);

export function App() {
  return (
    <RouterProvider router={router} />
  );
}

