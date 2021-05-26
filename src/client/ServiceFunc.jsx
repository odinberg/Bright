import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { ServiceParts } from "./ServiceParts";
import { Service } from "./service";
import { Receipt } from "./receipt";
import { Submit } from "./submit";

export const defaultData = {
  productType: "",
  partType: "",
};
export const steps = [
  { id: "product" },
  { id: "part" },
  { id: "receipt" },
  { id: "submit" },
];

export const ServiceFunc = () => {
  const [serviceData, setServiceData] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { serviceData, setServiceData, navigation };

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
