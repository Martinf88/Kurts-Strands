import React from "react";
import "../css/product.css";
import { getToys } from "../data/crud";
import useStore from "../data/store";

export default function Product() {
  const { toys, setToys, addToCart } = useStore((state) => ({
    toys: state.toys,
    setToys: state.setToys,
    addToCart: state.addToCart,
  }));

  const handleGetToys = async () => {
    setToys(await getToys());
  };
  const handleAddToCart = (toy) => {
    const id = Date.now();
    addToCart({ ...toy, id });
    console.log("added to cart");
  };
  return (
    <>
      <button className="fetch-btn btn" onClick={handleGetToys}>
        Våra Leksaker
      </button>
      <div className="product-container">
        {toys.map((toy) => (
          <div className="product" key={e.key}>
            <img src={e.url} alt={e.title} />
            <h2>{e.title}</h2>
            <h3>{e.category}</h3>
            <div className="price-wrapper">
              <button
                onClick={() => handleAddToCart(toy)}
                className="buy-btn btn"
              >
                Köp
              </button>
              <p>{e.price}kr</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
