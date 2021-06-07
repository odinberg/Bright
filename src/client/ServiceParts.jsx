import React from "react";
import { Parts } from "./Parts";
import backBtnImg from "./images/backBtn.png";

export const ServiceParts = ({ serviceData,  navigation }) => {
  const { partType } = serviceData;
  const nextStep = () => navigation.next();
  const storePart = () => {
    const productList = { Parts };
    sessionStorage.setItem("myPart", JSON.stringify(productList));
  };

  return (
    <>

      <h3>Pick the part you have to switch out</h3>

      <button className="backBtn" onClick={() => navigation.previous()}>
        <img className="backBtnImg" src={backBtnImg} alt="back" />
      </button>

      <div className="partsContainer">
        {Parts.map((part, index) => (
          <div
            key={index}
            className={part.css}
            onClick={() => {
              nextStep();
              storePart();
            }}
          >
            <img className={part.imageCss} src={part.image} alt="image" />
            <h3 className={part.textCss}>{part.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
};
