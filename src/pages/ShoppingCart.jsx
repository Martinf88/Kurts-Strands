import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartItem from "../components/ShoppingCartItem";
import Header from "../components/Header";
import "../css/shopping-cart.css";

export default function ShoppingCart() {
  return (
    <>
      <Header />
      <div className="back-wrapper">
        <NavLink to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </NavLink>
      </div>
      <section className="cart">
        <h1 className="cart-title">Dina Varukorg</h1>
        <div className="cart-header">
          <p className="item-name">Produkt</p>
          <p className="item-price">Pris</p>
          <p className="item-quantity">Antal</p>
          {/* <p className="item-price">á pris</p> */}
          <p className="item-total-price">Totalt</p>
        </div>
        <ShoppingCartItem />
        <ShoppingCartItem />
        <button className="btn">Lägg beställning</button>
        <p className="total-amount">Totalt: ?kr</p>
      </section>
    </>
  );
}
