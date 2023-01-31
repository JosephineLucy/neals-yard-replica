import Hero from "../Hero/Hero";
import CollectionsTab from "../CollectionsTab/CollectionsTab";
import ProductGallery from "../ProductGallery/ProductGallery";
import { useState } from "react";

const Home = () => {
  const [bestSellers, setBestSellers] = useState(true);
  const [essentialOils, setEssentialOils] = useState(false);

  return (
    <div className="homepage">
      <Hero />
      <CollectionsTab
        setBestSellers={setBestSellers}
        setEssentialOils={setEssentialOils}
        essentialOils={essentialOils}
        bestSellers={bestSellers}
      />
      <ProductGallery essentialOils={essentialOils} bestSellers={bestSellers} />
    </div>
  );
};

export default Home;
