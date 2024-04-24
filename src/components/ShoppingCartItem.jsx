import React from "react";
import "../css/shopping-cart-items.css";

export default function ShoppingCartItem() {
  return (
    <div className="cart-item">
      <div className="item-image">
        <img
          src="https://static.vecteezy.com/system/resources/previews/009/974/271/original/3d-rendering-beach-ball-isolated-png.png"
          alt="produkt"
        />
        <p>Badboll XL</p>
      </div>
      <p className="item-price">pris</p>
      <div className="item-quantity">
        <button>-</button>
        <p>1</p>
        <button>+</button>
      </div>
      <p className="item-price">199kr</p>
    </div>
  );
}
