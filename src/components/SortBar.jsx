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
      <nav className="sortbar">
        <div className="sorting-wrapper">
          <select name="" id="">
            <option value="name">A-Ö</option>
            <option value="name">Ö-A</option>
          </select>
          <select name="" id="">
            <option value="price">Stigande</option>
            <option value="price">Fallande</option>
          </select>
        </div>
        <NavLink to="/cart" className="cart-nav">
          <FontAwesomeIcon icon={faShoppingBasket} className="cart-icon" />
          <span className="total-count">{totalCount}</span>
        </NavLink>
      </nav>
    </section>
  );
}
