import React from "react";
import { NavLink } from "react-router-dom";
import "../css/thanks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";

export default function ThankYoypage() {
  return (
    <>
      <Header />
      <div className="thanks-link-wrapper">
        <NavLink to="/" className="thanks-link">
          X
        </NavLink>
      </div>
      <div className="thanks-wrapper">
        <FontAwesomeIcon className="checkmark-icon" icon={faCheck} />
        <h1>Tack för din Beställning!</h1>
        <p>Dina varor skickas inom 3-5 dagar.</p>
      </div>
    </>
  );
}
