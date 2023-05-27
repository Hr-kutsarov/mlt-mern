
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from './components/Home.jsx'
import { Register } from './components/Register.jsx'
import { Logout } from './components/Logout.jsx'
import { Login } from './components/Login.jsx'
import { EditEvent } from './components/Body/EditEvent.jsx'
import { ErrorPage } from './ErrorPage';

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
    path: "edit-event/:id",
    element: <EditEvent />,
    errorElement: <ErrorPage />
  }
]);


export function App() {
  return (
    <RouterProvider router={router} />
  );
}

