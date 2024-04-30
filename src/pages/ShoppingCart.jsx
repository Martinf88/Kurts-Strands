import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartItem from "../components/ShoppingCartItem";
import Header from "../components/Header";
import "../css/shopping-cart.css";
import useStore from "../data/store";
import "../css/admin-page.css";
import CheckoutForm from "../components/CheckoutForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

export default function ShoppingCart() {
  const { totalPrice, cart, clearCart } = useStore((state) => ({
    totalPrice: state.totalPrice,
    cart: state.cart,
    clearCart: state.clearCart,
  }));
  const [checkout, setCheckout] = useState(false);

  //clear shopping cart on checkout
  const handleCheckout = () => {
    setCheckout(true);
  };

  // Funktion för att hantera beställning
  const placeOrder = () => {
    clearCart();
  };

  return (
    <>
      <Header />
      <div className="back-btn-wrapper">
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
        {cart.length === 0 ? (
          <div className="message-wrapper">
            <FontAwesomeIcon
              icon={faShoppingBasket}
              className="message-cart-icon"
            />
            <h1 className="message-title">
              Det är tomt här! Varför inte lägga till något i din varukorg?
            </h1>
            <p className="message-description">
              Kika igenom vårt fantastiska sortiment,
            </p>
            <NavLink to="/"> Börja Shoppa Nu!</NavLink>
          </div>
        ) : !checkout ? (
          <>
            <h1 className="cart-title">Din Varukorg</h1>
            <div className="cart-header">
              <p className="item-name">Produkt</p>
              <p className="item-price">Pris</p>
              <p className="item-quantity">Antal</p>
            </div>
            <ShoppingCartItem />
            <div className="checkout-wrapper">
              <p className="total-amount">Totalt: {totalPrice}kr</p>

              <button onClick={handleCheckout} className="btn place-order-btn">
                Gå till kassan
              </button>
            </div>
          </>
        ) : (
          <CheckoutForm placeOrder={placeOrder} />
        )}
      </section>
    </>
  );
}
