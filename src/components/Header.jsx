import React from "react";
import { NavLink } from "react-router-dom";
import "../css/header.css";

export default function Header() {
  return (
    <header className="header">
      <div>
        <h1 className="header-title">Kurt Strands</h1>
        <h2 className="header-subtitle">Strand- & Badleksaker sedan 1976</h2>
      </div>
      <NavLink className="nav-link" to="/login">
        Login
      </NavLink>
    </header>
  );
}
