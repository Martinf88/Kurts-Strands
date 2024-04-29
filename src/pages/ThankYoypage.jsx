import React from "react";
import { NavLink } from "react-router-dom";
import "../css/thanks.css";
export default function ThankYoypage() {
  return (
    <div className="thanks-wrapper">
      <h1>Tack för din order!</h1>
      <NavLink to="/" className="thanks-link">
        Fortsätt shoppa
      </NavLink>
    </div>
  );
}
