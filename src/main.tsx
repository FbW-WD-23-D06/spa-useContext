import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "pages/Home";
import Login from "pages/Login";
import Profile from "pages/Profile";
import Register from "pages/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "features/navigation/layout/Layout.tsx";
import { path } from "features/navigation/routing/path.ts";
import NotFound from "pages/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: path.home,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: path.register,
        element: <Register />,
      },
      {
        path: path.login,
        element: <Login />,
      },
      {
        path: path.profile,
        element: <Profile />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<p>loading..</p>} />
  </React.StrictMode>
);
