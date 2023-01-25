import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import CollectionsTab from "./components/CollectionsTab/CollectionsTab";
import ProductGallery from "./components/ProductGallery/ProductGallery";

function App() {
  function handleClick(e) {
    // console.log(e.target, "<<<<e in handleclick");
    console.log(e.target.innerText === "United Kingdom (GBP £)");
  }
  //p.select-currency
  //p.currencies

  return (
    <div className="App" onClick={(e) => handleClick(e)}>
      <Header />
      <Hero />
      <CollectionsTab />
      <ProductGallery />
    </div>
  );
}

export default App;
