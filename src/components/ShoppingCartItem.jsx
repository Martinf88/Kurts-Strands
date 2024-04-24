import React from "react";
import "../css/shopping-cart-items.css";

export default function ShoppingCartItem() {
  return (
    <div className="cart-item">
      <div className="image-title-wrapper">
        <img
          src="https://static.vecteezy.com/system/resources/previews/009/974/271/original/3d-rendering-beach-ball-isolated-png.png"
          alt="produkt"
        />
        <p>Badboll XL</p>
      </div>
      <p className="item-price">???kr</p>
      <div className="amount-wrapper">
        <button className="decrease-btn">-</button>
        <input type="text" readOnly value="?" />
        <button className="increase-btn">+</button>
      </div>
      <p className="item-price">???kr</p>
    </div>
  );
}
