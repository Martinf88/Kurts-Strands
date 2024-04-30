import React from "react";
import "../css/search-bar.css";
import useStore from "../data/store";

export default function SearchBar() {
  const { cart } = useStore((state) => ({
    cart: state.cart,
  }));
  return (
    <div className="search-wrapper">
      <input type="text" id="search" placeholder="Sök i hela butiken här..." />
    </div>
  );
}
