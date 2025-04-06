import React from "react";
import { Banner } from "../../components/Banner";

import { useState } from "react";

import { ServicesPaymentCard } from "../../components/Services/ServicesPaymentCard";
import { ServicesCard } from "../../components/Services/ServicesCard";

export const Services = () => {
  const [isYearly, setIsYearly] = useState(false);
  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div>
      <Banner pageTitle="Facilities & Services" />
      <div
        className="container-fluid mt-4"
        style={{
          fontFamily: "Poppins",
        }}
      >
        <h4 className="text-center fw-bold mt-3">
          The perfect plan for your need
        </h4>
        <p className="text-center mt-3">
          We provide healthcare plans designed to keep students healthy and safe
          with the right medical support.
        </p>
        <div className="on-off-toggle d-flex justify-content-center pb-4">
          <div className="d-flex align-items-center gap-3">
            <span
              className={`fw-bold ${!isYearly ? "text-dark" : "text-muted"}`}
            >
              Bill Monthly
            </span>

            <div
              className="position-relative"
              style={{
                width: "50px",
                height: "25px",
                cursor: "pointer",
              }}
              onClick={toggleBilling}
            >
              <div
                className="position-absolute w-100 h-100 rounded-pill"
                style={{
                  backgroundColor: "#3BBCF666",
                }}
              ></div>
              <div
                className="position-absolute rounded-circle"
                style={{
                  width: "22px",
                  height: "20px",
                  top: "2px",
                  left: isYearly ? "25px" : "3px",
                  backgroundColor: "#3BBCF6",
                  transition: "left 0.3s ease",
                }}
              ></div>
            </div>
            <span
              className={`fw-bold ${isYearly ? "text-dark" : "text-muted"}`}
            >
              Bill Yearly
            </span>
          </div>
        </div>
        < ServicesPaymentCard />
      </div>
      <div className="container my-5">
        <h4 className="text-center">Additional Services</h4>
        <ServicesCard />
      </div>
    </div>
  );
};
