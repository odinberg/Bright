import React from "react";
import { Products } from "./Products";



export const Service = ({ serviceData, navigation }) => {
  const { productType } = serviceData;


  /*Going to next step of the service */
  const nextStep = () => navigation.next();


  /* Stores the product clicked and set to sessionStorage */
  const storeProduct = (product) => {

    sessionStorage.setItem("myProduct", JSON.stringify(product));
  };


  /* Setup for products, return all the products */
  return (
      <main className="mainContainer">
    <div className="productContainer">
      {Products.map((product, index) => (
        <div
          name={productType}
          key={index}
          className={product.css}
          onClick={() => {
            storeProduct(product);
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
      </main>
  );
};
