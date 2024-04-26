import React from "react";
import { NavLink } from "react-router-dom";
import "../css/edit-page.css";
import useStore from "../data/store";
import { deleteToy, getToys } from "../data/crud";

import EditForm from "../components/EditForm";

export default function Editpage() {
  const { toys, setToys } = useStore((state) => ({
    toys: state.toys,
    setToys: state.setToys,
  }));

  const handleGetToys = async () => {
    setToys(await getToys());
  };

  const handleRemoveToy = async (toyId) => {
    try {
      await deleteToy(toyId);
      await handleGetToys();
    } catch (error) {
      console.error("Error removing toy: ", error);
    }
  };

  return (
    <div className="edit-container">
      <NavLink to="/">Logga ut</NavLink>
      <h1>Lägg till produkt</h1>
      <EditForm />

      <h1>Redigera Produkt</h1>
      <button onClick={handleGetToys} className="btn">
        Hämta produkter
      </button>
      <div className="product-container">
        {toys.map((toy) => (
          <div className="product" key={toy.key}>
            <button
              onClick={() => handleRemoveToy(toy.key)}
              className="edit-btn"
            >
              Ta bort
            </button>
            <button className="edit-btn">Redigera</button>
            <img src={toy.url} alt={toy.title} />
            <h2>{toy.title}</h2>
            <h3>{toy.category}</h3>
            <div className="price-wrapper">
              <p>{toy.price}kr</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
