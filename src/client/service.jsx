import React from "react";
import { Products } from "./Products";

export const Service = ({ serviceData, navigation }) => {
  const { productType } = serviceData;

  return (
    <div className="productContainer">
      {Products.map((product) => (
        <div
          name={productType}
          key={product.idx}
          className={product.css}
          onClick={() => navigation.next()}
        >
          <img
            key={product.idx}
            src={product.image}
            className={product.imageCss}
            alt={product.title}
          />
          <h3 key={product.idx} className={product.textCss}>
            {product.title}
          </h3>
        </div>
      ))}
    </div>
  );
};
