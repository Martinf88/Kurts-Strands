import React from "react";
import "../css/shopping-cart.css";
import useStore from "../data/store";

export default function ShoppingCartItem({ setTotalPrice }) {
  const { cart, addToCart } = useStore((state) => ({
    cart: state.cart,
    addToCart: state.addToCart,
  }));

  const handleIncrease = (toy) => {
    addToCart(toy);
  };
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
            <input type="text" readOnly value={toy.count} />
            <button
              className="increase-btn"
              onClick={() => handleIncrease(toy)}
            >
              +
            </button>
          </div>
          <p className="item-price">???kr</p>
          <button className="delete-btn">X</button>
        </div>
      ))}
    </>
  );
}
