import React from "react";

import { Accordion } from "@material-ui/core";
import { AccordionSummary } from "@material-ui/core";
import { AccordionDetails } from "@material-ui/core";
import { Products } from "./Products";
import { Parts } from "./Parts";

export const Receipt = ({ serviceData }) => {
  const { productType, partType } = serviceData;

  //Henter ut objektene fra Part og Product arrayene
  const getValues = () => {

    var product;
    var part;
    for(var i = 0; i <= Products.length; i++){
      if (Products[i].idx == sessionStorage.getItem("myProductID")){
        product = Products[i];
        break;
      }
    }

    for(var i = 0; i <= Parts.length; i++){
      if (Parts[i].idz == sessionStorage.getItem("myPartID")){
        part = Parts[i];
        break;
      }
    }
    console.log(JSON.stringify(product));
    console.log(JSON.stringify(part));

  };

  return (
    <div className="receiptContainer" onClick={getValues()}>
      <h3>Your receipt</h3>

      <RenderAccordion
        summary="Products"
        details={[
          {
            Product: Products,
          },
          {
            Part: Parts,
          },
        ]}
      />
    </div>
  );
};

export const RenderAccordion = ({ summary, details }) => (
  <Accordion>
    <AccordionSummary>{summary}</AccordionSummary>
    <AccordionDetails>
      <div>
        {details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          //return <div key={index}>{`${objKey}: ${objValue}`}</div>;
          return <div key={index}>{sessionStorage.getItem("myPartID")}</div>;
        })}
      </div>
    </AccordionDetails>
  </Accordion>
);
