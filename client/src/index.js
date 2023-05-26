import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Register } from './components/Register.jsx'
import { Logout } from './components/Logout.jsx'
import { Login } from './components/Login.jsx'
import { ErrorPage } from './ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);