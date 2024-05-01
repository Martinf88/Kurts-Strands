import React, { useState } from "react";
import "../css/admin-page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import EditNav from "../components/EditNav";
import useStore from "../data/store";
import { deleteToy, getToys, updateToy } from "../data/crud";

export default function AdminPage() {
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedToyId, setSelectedToyId] = useState(null);
  const { toys, setToys } = useStore((state) => ({
    toys: state.toys,
    setToys: state.setToys,
  }));

  //---------------VALIDATION---------------
  const [url, setUrl] = useState("");
  const [urlTouched, setUrlTouched] = useState(false);
  const [title, setTitle] = useState("");
  const [titleTouched, setTitleTouched] = useState(false);
  const [category, setCategory] = useState("");
  const [categoryTouched, setCategoryTouched] = useState(false);
  const [price, setPrice] = useState("");
  const [priceTouched, setPriceTouched] = useState(false);

  // Validate values
  const urlIsValid = url.length > 0;
  const titleIsValid = title.length > 0;
  const categoryIsValid = category.length > 0;
  const priceIsValid = /^\d+$/.test(price);

  //Error messages
  const urlErrorMessage = urlIsValid ? "" : "Fyll i en Url.";
  const titleErrorMessage = titleIsValid ? "" : "Fyll i ett produktnamn.";
  const categoryErrorMessage = categoryIsValid ? "" : "Fyll i en kategori.";
  const priceErrorMessage = priceIsValid
    ? ""
    : "Fyll i fältet med enbart siffor";

  //Check if all inputfields are filled in correctly for button disabled
  const formIsValid =
    urlIsValid && titleIsValid && categoryIsValid && priceIsValid;

  // CSS variables
  let urlErrorClass = urlTouched && !urlIsValid ? "error" : "error hidden";
  let urlClass = urlIsValid ? "valid" : "invalid";
  let titleErrorClass =
    titleTouched && !titleIsValid ? "error" : "error hidden";
  let titleClass = titleIsValid ? "valid" : "invalid";
  let categoryErrorClass =
    categoryTouched && !categoryIsValid ? "error" : "error hidden";
  let categoryClass = categoryIsValid ? "valid" : "invalid";
  let priceErrorClass =
    priceTouched && !priceIsValid ? "error" : "error hidden";
  let priceClass = priceIsValid ? "valid" : "invalid";

  //---------------HANDLEFUNCTIONS---------------
  const handleGetToys = async () => {
    setLoading(true);
    setToys(await getToys());
    setLoading(false);
  };

  const handleRemoveToy = async (toyId) => {
    if (!toyId) {
      console.error("Toy ID is not defined.");
      return;
    }
    try {
      setLoading(true);
      await deleteToy(toyId);
      await handleGetToys();
      setLoading(false);
    } catch (error) {
      console.error("Error removing toy: ", error);
      setLoading(false);
    }
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

  const handleUpdateToy = async (selectedToyId) => {
    const updatedToy = { url, title, category, price };
    try {
      setLoading(true);
      await updateToy(selectedToyId, updatedToy);
      const updatedList = await getToys();
      setToys(updatedList);
      setLoading(false);
    } catch (error) {
      console.error("Error updating toy: ", error);
      setLoading(false);
    }
    setIsVisible(false);
    setUrl("");
    setUrlTouched(false);
    setTitle("");
    setTitleTouched(false);
    setCategory("");
    setCategoryTouched(false);
  };

  return (
    <>
      <EditNav />
      <div className="edit-container">
        <h1 className="edit-container-title">Hantera Produkter</h1>
        {/* <button onClick={() => handleGetToys()} className="btn">
          Hämta produkter
        </button> */}
        {!isVisible ? (
          <div className="edit-product-grid">
            {toys.map((toy) => (
              <div className="product" key={toy.key}>
                <div className="admin-btn-wrapper">
                  <button
                    disabled={loading}
                    onClick={() => handleRemoveToy(toy.key)}
                    className="remove-btn"
                  >
                    <FontAwesomeIcon icon={faTrash} className="remove-icon" />
                  </button>
                  <button
                    disabled={loading}
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
          </div>
        ) : (
          <div className="update-container">
            <label>Url</label>
            <input
              className={urlClass}
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onBlur={() => setUrlTouched(true)}
            />
            <p className={urlErrorClass}> {urlErrorMessage} &nbsp; </p>
            <label>Produktnamn</label>
            <input
              className={titleClass}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={() => setTitleTouched(true)}
            />
            <p className={titleErrorClass}> {titleErrorMessage} &nbsp; </p>
            <label>Kategori</label>
            <input
              className={categoryClass}
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              onBlur={() => setCategoryTouched(true)}
            />
            <p className={categoryErrorClass}>
              {" "}
              {categoryErrorMessage} &nbsp;{" "}
            </p>
            <label>Pris</label>
            <input
              className={priceClass}
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              onBlur={() => setPriceTouched(true)}
            />
            <p className={priceErrorClass}> {priceErrorMessage} &nbsp; </p>
            <button
              disabled={!formIsValid || loading}
              onClick={() => handleUpdateToy(selectedToyId)}
            >
              Spara
            </button>
          </div>
        )}
      </div>
    </>
  );
}
