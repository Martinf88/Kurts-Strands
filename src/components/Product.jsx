import React from "react";
import "../css/product.css";

export default function Product() {
  return (
    <div className="product">
      <img
        src="https://static.vecteezy.com/system/resources/previews/009/974/271/original/3d-rendering-beach-ball-isolated-png.png"
        alt="Badboll"
      />
      <h2>Badboll XL</h2>
      <h3>Vattenleksak</h3>
      <div className="price-wrapper">
        <button>Köp</button>
        <p>199kr</p>
      </div>
    </div>
  );
}
