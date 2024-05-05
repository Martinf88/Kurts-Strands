import React, { useEffect, useRef, useState } from "react";
import SortBar from "../components/SortBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/homepage.css";
import Product from "../components/Product";
import { getToys } from "../data/crud";
import useStore from "../data/store";

export default function Homepage() {
  const topRef = useRef(null);
  const [selectedSortingOption, setSelectedSortingOption] = useState("");

  const { setToys } = useStore((state) => ({
    setToys: state.setToys,
  }));

  useEffect(() => {
    const fetchData = async () => {
      setToys(await getToys());
    };

    fetchData();
  }, []);

  const handleSortingChange = (option) => {
    setSelectedSortingOption(option);
  };

  return (
    <>
      <div ref={topRef}></div>
      <Header />
      <SortBar onSortingChange={handleSortingChange} />
      <section className="main-section">
        <Product selectedSortingOption={selectedSortingOption} />
      </section>
      <Footer topRef={topRef} />
    </>
  );
}
