import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { router } from "./features/navigation/routing/router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      {/* Wrap the entire app with the ThemeContextProvider to be able to use the state from the provider throughout the app */}
      <RouterProvider router={router} fallbackElement={<p>loading..</p>} />
    </ThemeContextProvider>
  </React.StrictMode>
);
