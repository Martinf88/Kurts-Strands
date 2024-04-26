import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/edit-page.css";
import useStore from "../data/store";
import { deleteToy, getToys, updateToy } from "../data/crud";

import EditForm from "../components/EditForm";

export default function Editpage() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedToyId, setSelectedToyId] = useState(null);

  const { toys, setToys } = useStore((state) => ({
    toys: state.toys,
    setToys: state.setToys,
  }));

  const handleGetToys = async () => {
    setToys(await getToys());
  };

  const handleRemoveToy = async (toyId) => {
    if (!toyId) {
      console.error("Toy ID is not defined.");
      return;
    }
    try {
      await deleteToy(toyId);
      await handleGetToys();
    } catch (error) {
      console.error("Error removing toy: ", error);
    }
  };

  const handleUpdateToy = async (selectedToyId) => {
    const updatedToy = { url, title, category, price };
    try {
      await updateToy(selectedToyId, updatedToy);
      const updatedList = await getToys();
      setToys(updatedList);
    } catch (error) {
      console.error("Error updating toy: ", error);
    }
    setIsVisible(false);
  };

  const handleEditToy = (toy) => {
    setIsVisible(true);
    setSelectedToyId(toy.key);
    setUrl(toy.url);
    setTitle(toy.title);
    setCategory(toy.category);
    setPrice(toy.price);
    console.log(isVisible);
  };

  return (
    <div className="edit-container">
      <div className="edit-nav">
        <NavLink to="/">
          <button className="btn">Logga ut</button>
        </NavLink>
        <NavLink>
          <button className="btn">Lägg till en produkt</button>
        </NavLink>
        <NavLink>
          <button className="btn">Redigera produkt</button>
        </NavLink>
      </div>
      <h1>Lägg till produkt</h1>
      <EditForm />

      {!isVisible ? (
        <>
          <h1>Redigera Produkt</h1>
          <button onClick={() => handleGetToys()} className="btn">
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
                <button onClick={() => handleEditToy(toy)} className="edit-btn">
                  Redigera
                </button>
                <img src={toy.url} alt={toy.title} />
                <h2>{toy.title}</h2>
                <h3>{toy.category}</h3>
                <div className="price-wrapper">
                  <p>{toy.price}kr</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1>Redigering Vy</h1>
          <label>Url</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <label>Produktnamn</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Kategori</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label>Pris</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button
            className="btn"
            onClick={() => handleUpdateToy(selectedToyId)}
          >
            Save
          </button>
        </>
      )}
    </div>
  );
}
