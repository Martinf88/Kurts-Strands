import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <NavLink to="/cart">Shopping Cart</NavLink>
      </ul>
    </nav>
  );
}
