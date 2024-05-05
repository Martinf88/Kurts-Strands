import React from "react";
import "../css/sortbar.css";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import useStore from "../data/store";

export default function SortBar({ onSortingChange }) {
  const { cart } = useStore((state) => ({
    cart: state.cart,
  }));

  const handleSortingChange = (event) => {
    const option = event.target.value;
    onSortingChange(option);
  };

  // Calculate the total count of items in the shopping cart
  const totalCount = cart.reduce((acc, item) => acc + item.count, 0);

  //TODO: Implement Sorting functionality

  return (
    <section className="sortBar-container">
      <SearchBar />
      <div className="sorting-wrapper">
        <select className="select" onChange={handleSortingChange}>
          <option value="">Sortera:</option>
          <option value="nameAsc">Namn: A-Ö</option>
          <option value="nameDesc">Namn: Ö-A</option>
          <option value="priceAsc">Pris: Stigande</option>
          <option value="priceDesc">Pris: Fallande</option>
        </select>
      </div>
      <NavLink to="/cart" className="cart-nav">
        <FontAwesomeIcon icon={faShoppingBasket} className="cart-icon" />
        <span className="total-count">{totalCount}</span>
      </NavLink>
    </section>
  );
}
