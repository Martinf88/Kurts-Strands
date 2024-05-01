import React from "react";
import "../css/search-bar.css";
import useStore from "../data/store";

export default function SearchBar() {
  const { setSearchTerm } = useStore((state) => ({
    setSearchTerm: state.setSearchTerm,
  }));

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-wrapper">
      <input
        type="text"
        id="search"
        placeholder="Sök i hela butiken här..."
        onChange={handleSearchChange}
      />
    </div>
  );
}
