import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/homepage.css";
import Product from "../components/Product";

export default function Homepage() {
  return (
    <>
      <Header />
      <Navbar />
      <section className="main-section">
        <h1>Våra produkter</h1>
        <div className="product-container">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
      <Footer />
    </>
  );
}
