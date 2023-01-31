import "./CollectionsTab.css";

const CollectionsTab = ({
  setBestSellers,
  setEssentialOils,
  bestSellers,
  essentialOils,
}) => {
  function selectBestSellers() {
    setBestSellers(true);
    setEssentialOils(false);
  }

  function selectEssentialOils() {
    setEssentialOils(true);
    setBestSellers(false);
  }

  return (
    <div className="collections-tab">
      <p
        onClick={() => selectBestSellers()}
        className={bestSellers ? "selected" : ""}
      >
        BEST SELLERS
      </p>
      <p
        onClick={() => selectEssentialOils()}
        className={essentialOils ? "selected" : ""}
      >
        20% OFF ESSENTIAL OILS
      </p>
    </div>
  );
};

export default CollectionsTab;
