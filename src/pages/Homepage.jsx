import React from "react";
import SortBar from "../components/SortBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/homepage.css";
import Product from "../components/Product";

export default function Homepage() {
  return (
    <>
      <Header />
      <SortBar />
      <section className="main-section">
        <h1>Våra produkter</h1>
        <Product />
      </section>
      <Footer />
    </>
  );
}
