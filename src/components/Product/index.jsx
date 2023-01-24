import React from "react";
import "./styled.css";

function Product({ productInfo }) {
  return (
    <div className="product-card" key={productInfo.id}>
      <img
        style={{ height: "200px" }}
        src={productInfo.image_url}
        alt={productInfo.title}
      />
      <p>{productInfo.title}</p>
      <h3>{productInfo.price}</h3>
    </div>
  );
}

export default Product;
