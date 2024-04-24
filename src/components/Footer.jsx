import React from "react";
import { NavLink } from "react-router-dom";
import "../css/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="links-wrapper">
        <NavLink to="/login">Logga in</NavLink>
        <NavLink to="/">Hem</NavLink>
        <p>Kontakt</p>
        <p>Om oss</p>
      </div>
      <p>
        Skapad av: Martin Fahlström:
        <a
          href="https://github.com/Martinf88"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
