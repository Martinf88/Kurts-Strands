import React from "react";

export default function ShoppingCartItem() {
  return (
    <div className="items-container">
      <div className="shopping-cart-item">
        <img src="" alt="produkt" />
        <h2>Titel</h2>
        <div>
          <button>-</button>
          <p>antal</p>
          <button>+</button>
        </div>
        <p>pris</p>
        <p>totalt pris</p>
      </div>
    </div>
  );
}
