import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./index.css";
import Loginpage from "./pages/Loginpage";
import ShoppingCart from "./pages/ShoppingCart";

const router = createHashRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Loginpage />,
  },
  {
    path: "/cart",
    element: <ShoppingCart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
