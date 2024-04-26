import React, { useState } from "react";
import "../css/edit-page.css";
import { addToys, getToys } from "../data/crud";
import useStore from "../data/store";

export default function EditForm() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const { toys, setToys } = useStore((state) => ({
    toys: state.toys,
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
    <form className="add-form">
      <label>Url</label>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
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
  );
}
