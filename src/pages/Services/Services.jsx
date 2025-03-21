import React from "react";
import { Banner } from "../../components/Banner";

import { ServicesCard } from "../../components/Services/ServicesCard";

export const Services = () => {
  return (
    <div>
      <Banner pageTitle="Facilities & Services" />
      <div className="container">
        <h4 className="text-center">The  Plan</h4>
      </div>
      <div className="container my-5">
        <h4 className="text-center">Additional Services</h4>
        <ServicesCard />
      </div>
    </div>
  );
};
