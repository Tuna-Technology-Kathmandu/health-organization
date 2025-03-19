import React from "react";
import { Banner } from "../../components/Banner";

import services from "../../utils/servces.json";
import cliniic from "../../assets/images/clinic-setup.png";

export const Services = () => {
  return (
    <div>
      <Banner pageTitle="Facilities & Services" />
      <div className="container my-5">
        <h4 className="text-center">Additional Services</h4>
        <div className="row g-4 my-3">
          {services.map((item, index) => (
            <div className="col-lg-4">
              <div className="card p-4">
                <center>
                  <img src={cliniic} alt={item.title} style={{ width: 48 }} className="my-3"/>
                </center>
                <div className="card-body text-center mt-4">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
