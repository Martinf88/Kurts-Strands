import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./index.css";
import Loginpage from "./pages/Loginpage";
import ShoppingCart from "./pages/ShoppingCart";
import ThankYoypage from "./pages/ThankYoypage";
import Editpage from "./pages/Editpage";

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
  {
    path: "/thanks",
    element: <ThankYoypage />,
  },
  {
    path: "/edit",
    element: <Editpage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
