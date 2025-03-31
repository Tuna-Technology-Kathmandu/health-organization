import React from "react";

export const AboutUsDescriptionShimmer = () => {
  return (
    <div className="py-2 my-5 px-md-4 ms-2 w-100">
      {/* Title placeholder */}
      <h2 className="mb-3 placeholder-glow">
        <span className="placeholder col-4"></span>
      </h2>
      
      <div className="row d-flex align-items-between justify-content-between g-3">
        {/* Text content placeholder */}
        <div className="col-lg-7 col-md-12 d-flex flex-wrap placeholder-glow">
          <p className="lh-lg text-justify w-100">
            <span className="placeholder col-12 mb-2"></span>
            <span className="placeholder col-12 mb-2"></span>
            <span className="placeholder col-12 mb-2"></span>
            <span className="placeholder col-10 mb-2"></span>
            <span className="placeholder col-12 mb-2"></span>
            <span className="placeholder col-8 mb-2"></span>
          </p>
        </div>
        
        {/* Image placeholder */}
        <div className="col-lg-5 col-md-12 d-flex justify-content-center">
          <div 
            className="placeholder img-fluid" 
            style={{ 
              maxWidth: "100%", 
              height: "400px", 
              width: "600px",
              backgroundColor: "#eee" 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};