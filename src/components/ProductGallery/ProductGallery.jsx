import { useEffect, useState } from "react";
import "./ProductGallery.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductGallery = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => {
        const results = response.json();
        return results;
      })
      .then((results) => {
        setProducts(results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err, "<<<<error");
      });
  }, []);

  if (isLoading) return <p>loading, please wait...</p>;
  return (
    <div className="product-gallery">
      {products.map((product) => (
        <ProductCard key={product.id} productInfo={product} />
      ))}
    </div>
  );
};

export default ProductGallery;
