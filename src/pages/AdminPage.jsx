import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../css/admin-page.css";
import useStore from "../data/store";
import { deleteToy, getToys, updateToy } from "../data/crud";
import EditNav from "../components/EditNav";

export default function AdminPage() {
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
    <>
      <EditNav />
      <div className="edit-container">
        <h1 className="edit-container-title">Hantera Produkter</h1>
        {!isVisible ? (
          <>
            <button onClick={() => handleGetToys()} className="btn">
              Hämta produkter
            </button>
            {toys.map((toy) => (
              <div className="product" key={toy.key}>
                <div className="admin-btn-wrapper">
                  <button
                    onClick={() => handleRemoveToy(toy.key)}
                    className="remove-btn"
                  >
                    <FontAwesomeIcon icon={faTrash} className="remove-icon" />
                  </button>
                  <button
                    onClick={() => handleEditToy(toy)}
                    className="edit-btn"
                  >
                    <FontAwesomeIcon icon={faEdit} className="edit-icon" />
                  </button>
                </div>
                <img src={toy.url} alt={toy.title} />
                <h2>{toy.title}</h2>
                <h3>{toy.category}</h3>
                <div className="price-wrapper">
                  <p>{toy.price}kr</p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="update-container">
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
            <button onClick={() => handleUpdateToy(selectedToyId)}>
              Spara
            </button>
          </div>
        )}
      </div>
    </>
  );
}
