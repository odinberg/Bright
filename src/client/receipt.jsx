import React from "react";

import { Accordion } from "@material-ui/core";
import { AccordionSummary } from "@material-ui/core";
import { AccordionDetails } from "@material-ui/core";
import { Products } from "./Products";
import { Parts } from "./Parts";

export const Receipt = () => {

    const obj = JSON.parse(sessionStorage.getItem("myProduct"));
    const obj2 = JSON.parse(sessionStorage.getItem("myPart"));

  return (
      <div>
          <h1 className="yourReceipt">Your receipt</h1>
          <div className="receiptContainer">
        <div className="receiptProduct">
            <h1>
                {obj.title}
            </h1>

            <img src={obj.image}/>
        </div>
        <div className="receiptPart">
            <h2>
                {obj2.title}
            </h2>
            <img src={obj2.image}/>
        </div>

    </div>
      </div>
  );
};

