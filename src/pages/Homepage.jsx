import React, { useEffect, useRef } from "react";
import SortBar from "../components/SortBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/homepage.css";
import Product from "../components/Product";
import { getToys } from "../data/crud";
import useStore from "../data/store";

export default function Homepage() {
  const topRef = useRef(null);

  const { setToys } = useStore((state) => ({
    setToys: state.setToys,
  }));

  useEffect(() => {
    const fetchData = async () => {
      setToys(await getToys());
    };

    fetchData();
  }, []);

  return (
    <>
      <div ref={topRef}></div>
      <Header />
      <SortBar />
      <section className="main-section">
        <Product />
      </section>
      <Footer topRef={topRef} />
    </>
  );
}
