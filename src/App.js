import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import CollectionsTab from "./components/CollectionsTab/CollectionsTab";
import ProductGallery from "./components/ProductGallery/ProductGallery";
import { useState } from "react";
import { currencyList } from "./componentData/componentData";

function App() {
  const [selectedCurr, setSelectedCurr] = useState(currencyList[0]);
  const [currOpen, setCurrOpen] = useState(false);
  function handleClick(e) {
    if (!currencyList.includes(e.target.innerText)) {
      setCurrOpen(false);
    }
  }

  return (
    <div className="App" onClick={(e) => handleClick(e)}>
      <Header
        selectedCurr={selectedCurr}
        setSelectedCurr={setSelectedCurr}
        currOpen={currOpen}
        setCurrOpen={setCurrOpen}
      />
      <Hero />
      <CollectionsTab />
      <ProductGallery />
    </div>
  );
}

export default App;
