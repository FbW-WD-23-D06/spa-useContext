import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Profile from "@/pages/Profile";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import { path } from "./path";

export const router = createBrowserRouter([
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