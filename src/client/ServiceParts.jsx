import React from "react";
import { Parts } from "./Parts";
import backBtnImg from "./images/backBtn.png";

export const ServiceParts = ({ navigation }) => {


    /*Going to next step of the service */
  const nextStep = () => navigation.next();


    /* Stores the part clicked and set to sessionStorage */
  const storePart = (part) => {

    sessionStorage.setItem("myPart", JSON.stringify(part));
  };


    /* Setup for parts, return all the parts */
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
              storePart(part);
            }}
          >
            <img className={part.imageCss} src={part.image} alt="image" />
            <h3 className={part.textCss }>{part.title}</h3>
          </div>
        ))}

      </div>
    </>
  )
}
