import React from "react";

export const MissionShimmer = () => {
  return (
    <div className="py-2 my-5 px-md-4 ms-2">
      {/* Title placeholder */}
      <h2 className="mb-3 placeholder-glow">
        <span className="placeholder col-4"></span>
      </h2>
      
      <div className="row d-flex flex-column flex-lg-row align-items-center justify-content-between g-3">
        {/* Image placeholder (switched to left side as in your component) */}
        <div className="col-lg-5 col-md-12 d-flex flex-wrap">
          <div 
            className="placeholder img-fluid" 
            style={{ 
              width: "100%", 
              height: "400px",
              backgroundColor: "#eee"
            }}
          ></div>
        </div>
        
        {/* Content placeholder */}
        <div className="col-lg-7 col-md-12 placeholder-glow">
          <p className="lh-lg">
            <span className="placeholder col-12 mb-2"></span>
            <span className="placeholder col-12 mb-2"></span>
            <span className="placeholder col-12 mb-2"></span>
            <span className="placeholder col-10 mb-2"></span>
            <span className="placeholder col-12 mb-2"></span>
            <span className="placeholder col-8 mb-2"></span>
            <span className="placeholder col-12 mb-2"></span>
            <span className="placeholder col-9 mb-2"></span>
          </p>
        </div>
      </div>
    </div>
  );
};