import React from "react";
import "../css/search-bar.css";

export default function SearchBar() {
  return (
    <div className="search-wrapper">
      <input type="text" id="search" placeholder="Sök i hela butiken här..." />
    </div>
  );
}
