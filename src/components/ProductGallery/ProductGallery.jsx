// import useFetch from "../../useFetch";
import "./ProductGallery.css";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";

const ProductGallery = ({ essentialOils, bestSellers }) => {
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => {
        if (!response.ok) {
          throw Error("Sorry, could not fetch the data for that resource.");
        }
        const products = response.json();
        return products;
      })
      .then((products) => {
        if (bestSellers) {
          const bests = products.filter(
            (product) => product.bestSeller === true
          );
          setFilteredProducts(bests);
        } else {
          const ess = products.filter(
            (product) => product.essentialOil === true
          );
          setFilteredProducts(ess);
        }
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setError(err.message);
        }
      })
      .then(() => {
        setLoading(false);
      });
  }, [bestSellers, essentialOils]);

  return (
    <div className="product-gallery">
      {error && <p>{error}</p>}
      {loading && <p>loading...</p>}
      {filteredProducts &&
        filteredProducts.map((product) => (
          <ProductCard key={product.id} productInfo={product} />
        ))}
    </div>
  );
};

export default ProductGallery;
