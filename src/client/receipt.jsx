import React from "react";

import { Accordion } from "@material-ui/core";
import { AccordionSummary } from "@material-ui/core";
import { AccordionDetails } from "@material-ui/core";
import { Products } from "./Products";
import { Parts } from "./Parts";

export const Receipt = ({ serviceData }) => {
  const { productType, partType } = serviceData;



  //Ikke i bruk enda, sjekker søk mot id i sessionStorage og genererer kvitering på nytt med verdiene
  const retrieveService = (serviceID) => {
    //DO: bruke søkebar til å genere kvitering på nytt
    var str = sessionStorage.getItem(serviceID);

    var product;
    var part;

    //Parser først "nummer(string)" for produkt og så de to siste for part
    var prod = parseInt(str.substring(0, 1));
    var prt = parseInt(str.substring(1, 3)); 

    for(var i = 0; i <= Products.length; i++){
      if (Products[i].idx == prod){
        product = Products[i];
        break;
      }
    }

    for(var i = 0; i <= Parts.length; i++){
      if (Parts[i].idz == prt){
        part = Parts[i];
        break;
      }
    }
    console.log(product)
    console.log(part);

  }

  //Sjekker om ny ID er i localStorage, sjekker til den finner gyldig plass
  const setServiceID = () => {
    var done = false;
    var i  = 0;
    while(!done){
      if(sessionStorage.getItem(JSON.stringify(i)) === null) {
        var value = getValues();
        var idx = value[0].idx;
        var idz = value[1].idz;
        sessionStorage.setItem(JSON.stringify(i), JSON.stringify(idx) + JSON.stringify(idz));
        done = true;
      }
      i++;
    }
  }

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

    //For Debug, fjern senere
    console.log(JSON.stringify(product));
    console.log(JSON.stringify(part));

    return [product, part];

  };

  return (
    <div className="receiptContainer" onClick={setServiceID()}>
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
