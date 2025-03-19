import React from "react";

import service from "../../../utils/homeServiceList.json";

export const HomeService = () => {
  return (
    <div className="home-about-us" style={{ background: "#F4F3F1" }}>
      <div className="container py-5">
        <h3 className="mb-3">Our Services</h3>
        <div className="row g-3">
          {service.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
              <div className="card">
                <center>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid my-3"
                    style={{ width: 150 }}
                  />
                </center>
                <div className="card-body">
                  <h4 className="text-center">{service[0].title}</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Exercitationem culpa iusto nobis deserunt fugit quae quaerat
                    obcaecati ipsam aperiam hic.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
