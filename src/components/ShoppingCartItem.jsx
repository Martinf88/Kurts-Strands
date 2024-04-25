import React from "react";
import "../css/shopping-cart.css";
import useStore from "../data/store";

export default function ShoppingCartItem() {
  const { cart } = useStore((state) => ({
    cart: state.cart,
  }));
  return (
    <>
      {cart.map((toy) => (
        <div key={toy.id} className="cart-item">
          <div className="image-title-wrapper">
            <img src={toy.url} alt="produkt" />
            <p>{toy.title}</p>
          </div>
          <p className="item-price">{toy.price}kr</p>
          <div className="amount-wrapper">
            <button className="decrease-btn">-</button>
            <input type="text" readOnly value="?" />
            <button className="increase-btn">+</button>
          </div>
          <p className="item-price">???kr</p>
        </div>
      ))}
    </>
  );
}
