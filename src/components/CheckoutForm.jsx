import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/admin-page.css";

export default function CheckoutForm({ placeOrder }) {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [address, setAddress] = useState("");
  const [addressTouched, setAddressTouched] = useState(false);
  const [postalcode, setPostalcode] = useState("");
  const [postalcodeTouched, setPostalcodeTouched] = useState(false);

  // Validering av formulärfält
  const nameIsValid = name.length > 0;
  const addressIsValid = address.length > 0;
  const postalcodeIsValid = /^\d+$/.test(postalcode);

  // Felmeddelanden för ogiltiga fält
  const nameErrorMessage = nameIsValid ? "" : "Fyll i för- och efternamn.";
  const addressErrorMessage = addressIsValid
    ? ""
    : "Fyll i din leveransadress.";
  const postalcodeErrorMessage = postalcodeIsValid
    ? ""
    : "Fyll i ett giltigt postnummer.";

  // Kontrollera om alla formulärfält är ifyllda korrekt
  const formIsValid = nameIsValid && addressIsValid && postalcodeIsValid;

  // CSS-klasser för att styra utseendet baserat på formulärfältens tillstånd
  let nameErrorClass = nameTouched && !nameIsValid ? "error" : "error hidden";
  let nameClass = nameTouched ? (nameIsValid ? "valid" : "invalid") : "";
  let addressErrorClass =
    addressTouched && !addressIsValid ? "error" : "error hidden";
  let addressClass = addressTouched
    ? addressIsValid
      ? "valid"
      : "invalid"
    : "";
  let postalcodeErrorClass =
    postalcodeTouched && !postalcodeIsValid ? "error" : "error hidden";
  let postalcodeClass = postalcodeTouched
    ? postalcodeIsValid
      ? "valid"
      : "invalid"
    : "";

  return (
    <div className="edit-container">
      <form className="update-container">
        <label>Namn</label>
        <input
          className={nameClass}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setNameTouched(true)}
        />
        <p className={nameErrorClass}> {nameErrorMessage} &nbsp; </p>
        <label>Leveransadress</label>
        <input
          type="text"
          className={addressClass}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          onBlur={() => setAddressTouched(true)}
        />
        <p className={addressErrorClass}> {addressErrorMessage} &nbsp; </p>
        <label>Postnummer</label>
        <input
          type="text"
          className={postalcodeClass}
          value={postalcode}
          onChange={(e) => setPostalcode(e.target.value)}
          onBlur={() => setPostalcodeTouched(true)}
        />
        <p className={postalcodeErrorClass}>
          {" "}
          {postalcodeErrorMessage} &nbsp;{" "}
        </p>
        <NavLink to="/thanks">
          <button
            disabled={!formIsValid}
            className="btn place-order-btn"
            onClick={placeOrder}
          >
            Lägg Beställning
          </button>
        </NavLink>
      </form>
    </div>
  );
}
