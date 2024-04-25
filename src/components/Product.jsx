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
          <div className="product" key={toy.key}>
            <img src={toy.url} alt={toy.title} />
            <h2>{toy.title}</h2>
            <h3>{toy.category}</h3>
            <div className="price-wrapper">
              <button
                onClick={() => handleAddToCart(toy)}
                className="buy-btn btn"
              >
                Köp
              </button>
              <p>{toy.price}kr</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
