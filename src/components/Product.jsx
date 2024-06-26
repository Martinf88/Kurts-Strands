import React from "react";
import "../css/product.css";
import useStore from "../data/store";

export default function Product({ selectedSortingOption }) {
  const { toys, addToCart, searchTerm } = useStore((state) => ({
    toys: state.toys,
    setToys: state.setToys,
    addToCart: state.addToCart,
    searchTerm: state.searchTerm,
  }));

  // Filter toys based on the search term entered by the user
  const filteredToys = toys.filter(
    (toy) =>
      toy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      toy.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //ADD ITEM TO CART
  const handleAddToCart = (toy) => {
    const id = Date.now();
    //SET ID TO TOY
    addToCart({ ...toy, id });
    console.log("added to cart");
  };

  // Sorting logic
  const sortedToys = filteredToys.slice().sort((a, b) => {
    switch (selectedSortingOption) {
      case "nameAsc":
        return a.title.localeCompare(b.title);
      case "nameDesc":
        return b.title.localeCompare(a.title);
      case "priceAsc":
        return a.price - b.price;
      case "priceDesc":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className="product-container">
      <div className="product-grid">
        {sortedToys.map((toy) => (
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
    </div>
  );
}
