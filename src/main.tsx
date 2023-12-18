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
import { AppContextProvider } from "./contexts/AppContext";

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
    <AppContextProvider> {/* Wrap the entire app with the AppContextProvider to be able to use the state from the provider throughout the app */}
      <RouterProvider router={router} fallbackElement={<p>loading..</p>} />
    </AppContextProvider>
  </React.StrictMode>
);
