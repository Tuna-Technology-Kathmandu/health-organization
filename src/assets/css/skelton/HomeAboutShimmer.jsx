import React from "react";

export const HomeAboutShimmer = () => {
  return (
    <div className="home-about-us">
      <div className="container py-5 my-5">
        <h3 className="mb-3 placeholder-glow">
          <span className="placeholder col-3"></span>
        </h3>
        <div className="row">
          <div className="col-lg-7">
            <p className="lh-lg text-justify placeholder-glow">
              <span className="placeholder col-12 mb-2"></span>
              <span className="placeholder col-12 mb-2"></span>
              <span className="placeholder col-12 mb-2"></span>
              <span className="placeholder col-10 mb-2"></span>
              <span className="placeholder col-12 mb-2"></span>
              <span className="placeholder col-12 mb-2"></span>
              <span className="placeholder col-8 mb-2"></span>
            </p>
            
            <button className="btn btn-primary disabled placeholder col-3" aria-disabled="true"></button>
          </div>
          <div className="col-lg-5 placeholder-glow">
            <div className="img-fluid placeholder" style={{ height: "400px", width: "100%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};