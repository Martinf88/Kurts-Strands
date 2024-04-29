import React from "react";
import { NavLink } from "react-router-dom";
import "../css/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="links-wrapper">
        <NavLink to="/login" className="footer-link">
          Logga in
        </NavLink>
        <NavLink to="/" className="footer-link">
          Hem
        </NavLink>
        <p>Kontakt</p>
        <p>Om oss</p>
      </div>
      <a
        href="https://github.com/Martinf88/Kurts-Strands"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        Kurt Strands on GitHub
      </a>
    </footer>
  );
}
