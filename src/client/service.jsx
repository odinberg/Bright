import React from "react";
import { Products } from "./Products";

export const Service = ({ serviceData, navigation }) => {
  const { productType } = serviceData;

  const nextStep = () => navigation.next();

  const storeProduct = (index) => {
    sessionStorage.setItem("myProduct", JSON.stringify(Products[index]));
    console.log(JSON.stringify(Products[1]));
  };

  return (
    <div className="productContainer">
      {Products.map((product, index) => (
        <div
          name={productType}
          key={index}
          className={product.css}
          onClick={() => {
            storeProduct(index);
            nextStep();
            console.log(index);
          }}
        >
          <img
            src={product.image}
            className={product.imageCss}
            alt={product.title}
          />
          <h3 className={product.textCss}>{product.title}</h3>
        </div>
      ))}
    </div>
  );
};
