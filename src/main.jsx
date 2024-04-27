import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./index.css";
import Loginpage from "./pages/Loginpage";
import ShoppingCart from "./pages/ShoppingCart";
import ThankYoypage from "./pages/ThankYoypage";
import AdminPage from "./pages/AdminPage";
import EditForm from "./components/EditForm";

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
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/add",
    element: <EditForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
