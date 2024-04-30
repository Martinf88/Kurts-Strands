import React from "react";
import "../css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="header">
      <div>
        <h1 className="header-title">Kurt Strands</h1>
        <h2 className="header-subtitle">Strand- & Badleksaker sedan 1976</h2>
      </div>
      <FontAwesomeIcon className="umbrella-icon" icon={faUmbrellaBeach} />
    </header>
  );
}
