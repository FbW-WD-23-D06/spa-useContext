import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { router } from "./features/navigation/routing/router";
import "./index.css";
import { UserContextProvider } from "./contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UserContextProvider>
        {/* Wrap the entire app with the ThemeContextProvider to be able to use the state from the provider throughout the app */}
        <RouterProvider router={router} fallbackElement={<p>loading..</p>} />
      </UserContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
