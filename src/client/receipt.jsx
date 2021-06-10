import React from "react";

import { Accordion } from "@material-ui/core";
import { AccordionSummary } from "@material-ui/core";
import { AccordionDetails } from "@material-ui/core";
import { Products } from "./Products";
import { Parts } from "./Parts";

export const Receipt = () => {

    /* Gets product and part from sessionStorage */
    const obj = JSON.parse(sessionStorage.getItem("myProduct"));
    const obj2 = JSON.parse(sessionStorage.getItem("myPart"));

    /*Makes a random service ID */
    const serviceID  = (length) => {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    /*Display for receipt */
  return (
      <div className="fullReceiptContainer">
          <h1 className="yourReceipt">Your receipt</h1>
          <div className="receiptContainer">
        <div className="receiptProduct">
            <h2 className="receiptProductTxt">
                {obj.title}
            </h2>

            <img src={obj.image}/>
        </div>
        <div className="receiptPart">
            <h2 className="receiptPartTxt">
                {obj2.title}
            </h2>
            <img src={obj2.image}/>
        </div>

    </div>
          <h1 className="serviceID">SERVICE ID: {serviceID(8)}</h1>
      </div>
  );
};

