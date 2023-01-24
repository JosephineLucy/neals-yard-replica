import { useEffect, useState } from "react";
import "../css/productGallery.css";

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

  return (
    <div className="product-gallery">
      {!isLoading &&
        products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image_url} alt={product.title} />
            <p>{product.title}</p>
            <h3>{product.price}</h3>
          </div>
        ))}
    </div>
  );
};

export default ProductGallery;
