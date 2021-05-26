import React from "react";

import { Parts } from "./Parts";

export const ServiceParts = ({ serviceData, setServiceData, navigation }) => {
  const { partType } = serviceData;

  return (
    <>
    <h3>Pick the part you have to switch out</h3>
    <div className="partsContainer">
      {Parts.map((part) => (
        <div
          key={part.idz}
          className={part.css}
          onClick={() => navigation.next()}
        >
          <img className={part.imageCss} src={part.image} alt="image" />
          <h3 key={part.idz} className={part.textCss}>
            {part.title}
          </h3>
        </div>
      ))}
      
    </div>
    <div className="backBtn" onClick={() => navigation.previous()}>
        Back
      </div>
    </>
  );
};
