import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/edit-page.css";
import { addToys } from "../data/crud";

export default function Editpage() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleAddNewToy = async (e) => {
    e.preventDefault();
    const newToy = { url: url, title: title, category: category, price: price };
    try {
      await addToys(newToy);
      setUrl("");
      setTitle("");
      setCategory("");
      setPrice("");
    } catch (error) {
      console.error("Error adding new toy: ", error);
    }
  };

  return (
    <div className="edit-container">
      <NavLink to="/">Logga ut</NavLink>
      <h1>Lägg till produkt</h1>
      <form className="add-form">
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
        <button onClick={handleAddNewToy} type="submit">
          Lägg till
        </button>
      </form>

      <h1>Redigera Produkt</h1>
      <button className="btn">Hämta produkter</button>
    </div>
  );
}
