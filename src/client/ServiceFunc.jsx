import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { ServiceParts } from "./ServiceParts";
import { Service } from "./service";
import { Receipt } from "./receipt";
import { Submit } from "./submit";


/*Functionality for the service */

export const defaultData = {
  Products: "",
  Parts: "",
};

/*Each step in the service, starting with product*/
export const steps = [
  { id: "product" },
  { id: "part" },
  { id: "receipt" },
  { id: "submit" },
];


/*initialStep: 0 is product*/
export const ServiceFunc = () => {
  const [serviceData, setServiceData] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { serviceData, setServiceData, navigation };


  /*Match the different components with the steps for the service */
  switch (step.id) {
    case "product":
      return <Service {...props} />;
    case "part":
      return <ServiceParts {...props} />;
    case "receipt":
      return <Receipt {...props} />;
    case "submit":
      return <Submit {...props} />;
  }
};

/*export const storeProduct = () => {
  const productAndPartsList = { Products, Parts };
  useEffect(() => {
    sessionStorage.setItem(
      "myProductsAndParts",
      JSON.stringify(productAndPartsList)
    );
    console.log(productAndPartsList);
  }, [productAndPartsList]);
};*/
