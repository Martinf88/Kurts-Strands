import React from "react";
import { NavLink } from "react-router-dom";
import "../css/edit-page.css";
export default function Editpage() {
  return (
    <div className="edit-container">
      <NavLink to="/">Logga ut</NavLink>
      <h1>Lägg till produkt</h1>
      <form className="add-form">
        <label>Url</label>
        <input type="text" />
        <label>Produktnamn</label>
        <input type="text" />
        <label>Kategori</label>
        <input type="text" />
        <label>Pris</label>
        <input type="text" />
      </form>

      <h1>Redigera Produkt</h1>
      <button className="btn">Hämta produkter</button>
    </div>
  );
}
