import React from "react";
import { Parts } from "./Parts";
import backBtnImg from "./images/backBtn.png";
import { Products } from "./Products";

export const ServiceParts = ({ serviceData,  navigation }) => {
  const { partType } = serviceData;
  const nextStep = () => navigation.next();
  const storePart = (index) => {
    sessionStorage.setItem("myPartID", JSON.stringify(Parts[index].idz));
  };

  return (
    <>
      <h3>Pick the part you have to switch out</h3>

      <div className="backBtn" onClick={() => navigation.previous()}>
        <img className="backBtnImg" src={backBtnImg} alt="back" />
      </div>

      <div className="partsContainer">
        {Parts.map((part, index) => (
          <div
            key={index}
            className={part.css}
            onClick={() => {
              nextStep();
              storePart(index);
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
