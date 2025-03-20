import React from "react";

export const ServicePlaceholder = () => {
  return (
    <div className="home-about-us" style={{ background: "#F4F3F1" }}>
      <div className="container py-5">
        <h3 className="mb-3 placeholder-glow">
          <span className="placeholder col-3 rounded-2"></span>
        </h3>
        <div className="row g-3">
          {Array.from(Array(4).keys()).map((index) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
              <div className="card">
                <center>
                  <div className="placeholder-glow">
                    <div
                      className="placeholder"
                      style={{ width: 150, height: 150, borderRadius: "50%" }}
                    ></div>
                  </div>
                </center>
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-8"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-10"></span>
                    <span className="placeholder col-8"></span>
                    <span className="placeholder col-6"></span>
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
