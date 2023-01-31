import React from "react";
import Header from "./components/Header/Header";
import { useState } from "react";
import { currencyList } from "./componentData/componentData";
import Home from "./components/Home/Home";

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
      <Home />
    </div>
  );
}

export default App;
