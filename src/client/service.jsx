import React from "react";
import { Products } from "./Products";

export const Service = ({ serviceData, navigation }) => {
  const { productType } = serviceData;

  const nextStep = () => navigation.next();

  const storeProduct = () => {
    const productList = { Products: Products };
    sessionStorage.setItem("myProduct", JSON.stringify(productList));
  };

  return (
    <div className="productContainer">
      {Products.map((product, index) => (
        <div
          name={productType}
          key={index}
          className={product.css}
          onClick={() => {
            storeProduct();
            nextStep();
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
