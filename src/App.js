import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CollectionsTab from "./components/CollectionsTab";
import ProductGallery from "./components/ProductGallery";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CollectionsTab />
      <ProductGallery />
    </div>
  );
}

export default App;
