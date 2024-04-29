import React, { useState } from "react";
import "../css/admin-page.css";
import { addToys, getToys } from "../data/crud";
import useStore from "../data/store";
import EditNav from "./EditNav";

export default function AddForm() {
  // State hooks för att hantera formulärfält och beröringsstatus
  const [url, setUrl] = useState("");
  const [urlTouched, setUrlTouched] = useState(false);
  const [title, setTitle] = useState("");
  const [titleTouched, setTitleTouched] = useState(false);
  const [category, setCategory] = useState("");
  const [categoryTouched, setCategoryTouched] = useState(false);
  const [price, setPrice] = useState("");
  const [priceTouched, setPriceTouched] = useState(false);

  // custom hook för att hämta och sätta leksaker i lagringen
  const { setToys } = useStore((state) => ({
    setToys: state.setToys,
  }));

  // Funktion för att hämta leksaker från databasen
  const handleGetToys = async () => {
    setToys(await getToys());
  };

  // Funktion för att lägga till en ny leksak
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
      // Återställa formulärfält efter att en leksak har lagts till
      setUrl("");
      setUrlTouched(false);
      setTitle("");
      setTitleTouched(false);
      setCategory("");
      setCategoryTouched(false);
      setPrice("");
      setPriceTouched(false);
    } catch (error) {
      console.error("Error adding new toy: ", error);
    }
  };

  // Validering av formulärfält
  const urlIsValid = url.length > 0;
  const titleIsValid = title.length > 0;
  const categoryIsValid = category.length > 0;
  const priceIsValid = /^\d+$/.test(price);

  // Felmeddelanden för ogiltiga fält
  const urlErrorMessage = urlIsValid ? "" : "Fyll i en Url.";
  const titleErrorMessage = titleIsValid ? "" : "Fyll i ett produktnamn.";
  const categoryErrorMessage = categoryIsValid ? "" : "Fyll i en kategori.";
  const priceErrorMessage = priceIsValid
    ? ""
    : "Fyll i fältet med enbart siffor";

  // Kontrollera om alla formulärfält är ifyllda korrekt
  const formIsValid =
    urlIsValid && titleIsValid && categoryIsValid && priceIsValid;

  // CSS-klasser för att styra utseendet baserat på formulärfältens tillstånd
  let urlErrorClass = urlTouched && !urlIsValid ? "error" : "error hidden";
  let urlClass = urlTouched ? (urlIsValid ? "valid" : "invalid") : "";
  let titleErrorClass =
    titleTouched && !titleIsValid ? "error" : "error hidden";
  let titleClass = titleTouched ? (titleIsValid ? "valid" : "invalid") : "";
  let categoryErrorClass =
    categoryTouched && !categoryIsValid ? "error" : "error hidden";
  let categoryClass = categoryTouched
    ? categoryIsValid
      ? "valid"
      : "invalid"
    : "";
  let priceErrorClass =
    priceTouched && !priceIsValid ? "error" : "error hidden";
  let priceClass = priceTouched ? (priceIsValid ? "valid" : "invalid") : "";

  // Rendera komponenten
  return (
    <>
      <EditNav />
      <div className="edit-container">
        <h1 className="edit-container-title">Lägg till produkt</h1>
        <form className="update-container">
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
          <p className={categoryErrorClass}> {categoryErrorMessage} &nbsp; </p>
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
            disabled={!formIsValid}
            onClick={handleAddNewToy}
            type="submit"
          >
            Lägg till
          </button>
        </form>
      </div>
    </>
  );
}
