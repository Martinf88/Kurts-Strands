import React from "react";
import { NavLink } from "react-router-dom";

export default function EditNav() {
  return (
    <div className="edit-nav">
      <NavLink to="/">
        <button className="edit-nav-btn">Logga ut</button>
      </NavLink>
      <NavLink to="/add">
        <button className="edit-nav-btn">Lägg till en produkt</button>
      </NavLink>
      <NavLink to="/admin">
        <button className="edit-nav-btn">Redigera produkt</button>
      </NavLink>
    </div>
  );
}
