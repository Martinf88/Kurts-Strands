import React from "react";
import "../css/sortbar.css";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import useStore from "../data/store";

export default function sortBar() {
  const { cart } = useStore((state) => ({
    cart: state.cart,
  }));

  // Calculate the total count of items in the shopping cart
  const totalCount = cart.reduce((acc, item) => acc + item.count, 0);

  return (
    <section className="sortBar-container">
      <div className="input-container">
        <SearchBar />
      </div>
      <div className="sortbar">
        <div className="sorting-wrapper">
          <label>Sortera efter: </label>
          <select name="" id="">
            <option value="name">Namn: A-Ö</option>
            <option value="name">Namn: Ö-A</option>
          </select>
          <select name="" id="">
            <option value="Pris stigande">Pris: Stigande</option>
            <option value="Pris fallande">Pris: Fallande</option>
          </select>
        </div>
        <NavLink to="/cart" className="cart-nav">
          <FontAwesomeIcon icon={faShoppingBasket} className="cart-icon" />
          <span className="total-count">{totalCount}</span>
        </NavLink>
      </div>
    </section>
  );
}
