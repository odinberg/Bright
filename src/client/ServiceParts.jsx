import React from "react";

import { Parts } from "./Parts";

export const ServiceParts = ({ serviceData, setServiceData, navigation }) => {
  const { partType } = serviceData;

  return (
    <div className="partsContainer">
      <h3>Pick the part you have to switch out</h3>
      {Parts.map((part) => (
        <div
          key={part.idz}
          className={part.css}
          onClick={() => navigation.next()}
        >
          <img src={part.image} alt="image" />
        </div>
      ))}
      <div className="backBtn" onClick={() => navigation.previous()}>
        Back
      </div>
    </div>
  );
};
