import React from "react";
import { Banner } from "../../components/Banner";

import services from "../../utils/servces.json";
import cliniic from "../../assets/images/clinic-setup.png";
import plans from "../../utils/servicePlan.json";

import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

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
        <div className="row g-0">
          {plans.map((items, index) => (
            <div className="col-lg-4 " key={index}>
              <div
                className={`card p-3 m-3 shadow ${ index % 2 !== 0 ? "#3BBCF6 text-white" : ""}`}
                style={
                  index % 2 !== 0
                    ? { backgroundColor: "#3BBCF6", color: "white" }
                    : {}
                }
              >
                <div className="card-body mt-4 p-0">
                  <div className="d-flex justify-content-between">
                    <h5 className="text-start fs-5 fw-bold w-75">
                      {items.title}
                    </h5>
                    <p
                      className="fs-6 p-1 py-2 fw-bold rounded-3"
                      style={{
                        background: index === 1 ? "white" : "#3BBCF680",
                        color: index === 1 ? "#032B7F" : "#032B7F",
                      }}
                    >
                      {items.price}
                    </p>
                  </div>
                  <p className="fs-6"
                  style={{
                    color: index === 1 ? "white" : "text-secondary",
                  }}
                  >{items.time}</p>
                </div>
                <svg
                  width="100%"
                  height="10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0"
                    y1="5"
                    x2="100%"
                    y2="5"
                    stroke="#000"
                    strokeWidth="1"
                  />
                </svg>
                <div>
                  <ul className="p-1 pt-4">
                    {items.features.map((feature, ind) => (
                      <li key={ind} className="d-flex align-items-start mb-2">
                        <FaCheckCircle
                          className="me-2 flex-shrink-0"
                          style={{ color: "#032B7F" }}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container my-5">
        <h4 className="text-center">Additional Services</h4>
        <div className="row g-4 my-3">
          {services.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <div className="card p-4">
                <center>
                  <img
                    src={cliniic}
                    alt={item.title}
                    style={{ width: 48 }}
                    className="my-3"
                  />
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
