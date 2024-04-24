import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartItem from "../components/ShoppingCartItem";
import Header from "../components/Header";
import "../css/shopping-cart.css";

export default function ShoppingCart() {
  return (
    <section className="shopping-cart-section">
      <Header />
      <NavLink to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="w-6 h-6"
          width="20px"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        Back
      </NavLink>
      <h1 className="shopping-cart-title">Dina Varukorg</h1>
      <ShoppingCartItem />
    </section>
  );
}
