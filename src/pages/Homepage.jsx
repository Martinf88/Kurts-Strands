import React from "react";
import SortBar from "../components/SortBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/homepage.css";
import Product from "../components/Product";
import { getToys } from "../data/crud";
import useStore from "../data/store";

export default function Homepage() {
  const { toys, setToys, addToCart } = useStore((state) => ({
    toys: state.toys,
    setToys: state.setToys,
    addToCart: state.addToCart,
  }));

  const handleGetToys = async () => {
    setToys(await getToys());
  };
  return (
    <>
      <Header />
      <SortBar />
      <section className="hero-image">
        <div className="hero-text">
          <h1>Våra produkter</h1>
          <button onClick={handleGetToys} className="call-to-action btn">
            Våra Leksaker
          </button>
        </div>
      </section>
      <section className="main-section">
        <Product />
      </section>
      <Footer />
    </>
  );
}
