import React from "react";

import { Container } from "@material-ui/core";
import { Accordion } from "@material-ui/core";
import { AccordionSummary } from "@material-ui/core";
import { AccordionDetails } from "@material-ui/core";
import { Products } from "./Products";
import { Parts } from "./Parts";

export const Receipt = ({ serviceData }) => {
  const { productType, partType } = serviceData;
  return (
    <div className="receiptContainer">
      <h3>your receipt</h3>

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

          return <div key={index}>{`${objKey}: ${objValue}`}</div>;
        })}
      </div>
    </AccordionDetails>
  </Accordion>
);
