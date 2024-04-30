import React from "react";
import { NavLink } from "react-router-dom";
import "../css/footer.css";

export default function Footer({ topRef }) {
  const scrollToTop = () => {
    // Scrolla till ankarelementet längst upp på sidan
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="links-wrapper">
        <NavLink to="/login" className="footer-link">
          Logga in
        </NavLink>
        <button className="footer-btn" onClick={scrollToTop}>
          Hem
        </button>
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
