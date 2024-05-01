import React from "react";
import "../css/shopping-cart.css";
import useStore from "../data/store";

export default function ShoppingCartItem() {
  const { cart, addToCart, removeOneFromCart, removeAllFromCart } = useStore(
    (state) => ({
      cart: state.cart,
      addToCart: state.addToCart,
      removeOneFromCart: state.removeOneFromCart,
      removeAllFromCart: state.removeAllFromCart,
    })
  );

  const handleIncrease = (toy) => {
    addToCart(toy);
  };
  const handleDecrease = (id) => {
    removeOneFromCart(id);
  };

  const handleRemoveAll = (id) => {
    removeAllFromCart(id);
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
            <button
              className="decrease-btn"
              onClick={() => handleDecrease(toy.id)}
            >
              -
            </button>
            <input type="text" readOnly value={toy.count} />
            <button
              className="increase-btn"
              onClick={() => handleIncrease(toy)}
            >
              +
            </button>
          </div>
          <button
            className="delete-btn"
            onClick={() => handleRemoveAll(toy.id)}
          >
            X
          </button>
        </div>
      ))}
    </>
  );
}
