import React, { useState } from "react";
import "../css/admin-page.css";
import { addToys, getToys } from "../data/crud";
import useStore from "../data/store";
import EditNav from "./EditNav";

export default function EditForm() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const { setToys } = useStore((state) => ({
    setToys: state.setToys,
  }));

  const handleGetToys = async () => {
    setToys(await getToys());
  };

  const handleAddNewToy = async (e) => {
    e.preventDefault();
    const priceAsNumber = parseFloat(price);
    const newToy = {
      url: url,
      title: title,
      category: category,
      price: priceAsNumber,
    };
    try {
      await addToys(newToy);
      await handleGetToys();
      setUrl("");
      setTitle("");
      setCategory("");
      setPrice("");
    } catch (error) {
      console.error("Error adding new toy: ", error);
    }
  };

  return (
    <>
      <EditNav />
      <div className="edit-container">
        <h1 className="edit-container-title">Lägg till produkt</h1>
        <form className="update-container">
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
      </div>
    </>
  );
}
