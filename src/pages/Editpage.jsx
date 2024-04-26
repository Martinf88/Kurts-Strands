import React from "react";
import { NavLink } from "react-router-dom";
import "../css/edit-page.css";

import EditForm from "../components/EditForm";

export default function Editpage() {
  return (
    <div className="edit-container">
      <NavLink to="/">Logga ut</NavLink>
      <h1>Lägg till produkt</h1>
      <EditForm />

      <h1>Redigera Produkt</h1>
      <button className="btn">Hämta produkter</button>
    </div>
  );
}
