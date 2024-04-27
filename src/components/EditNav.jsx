import React from "react";
import { NavLink } from "react-router-dom";

export default function EditNav() {
  return (
    <div className="edit-nav">
      <NavLink to="/">
        <button className="edit-nav-btn">Logga ut</button>
      </NavLink>
      <div className="edit-nav-links">
        <NavLink to="/add" className="edit-nav-link">
          Lägg till en produkt
        </NavLink>
        <NavLink to="/admin" className="edit-nav-link">
          Redigera produkt
        </NavLink>
      </div>
    </div>
  );
}
