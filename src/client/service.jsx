import React from "react";
import { Products } from "./Products";

export const Service = ({ serviceData, setServiceData, navigation }) => {
  console.log(serviceData);

  const { productData } = serviceData;

  return (
    <div className="productContainer">
      {Products.map((product) => (
        <div key={product.idx} className={product.css}>
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
