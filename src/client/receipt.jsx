import React from "react";

import { Container } from "@material-ui/core";
import { Accordion } from "@material-ui/core";
import { AccordionSummary } from "@material-ui/core";
import { AccordionDetails } from "@material-ui/core";

export const Receipt = ({ serviceData }) => {
  const { productType, partType } = serviceData;
  return (
    <Container>
      <h3>your receipt</h3>
      
      <RenderAccordion
        summary="Products"
        details={[
          {
            Product: productType,
          },
          {
            Part: partType,
          },
        ]}
      />
    </Container>
  );
};

export const RenderAccordion = ({ summary, details }) => (
  <Accordion>
    <AccordionSummary>{summary}</AccordionSummary>
    <AccordionDetails>
      <div>
        {details.map((data, index) => {
          console.log(Object.keys(data)[0]);
        })}
      </div>
    </AccordionDetails>
  </Accordion>
);
