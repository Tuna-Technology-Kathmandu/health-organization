import React from "react";

export const HomeSliderShimmer = () => {
  return (
    <div className="slider-container">
      {/* Marquee Shimmer */}
      <div style={{ background: "#3BBCF626", height: "40px" }}>
        <div className="scrolling-text placeholder-glow d-flex justify-content-center align-items-center">
          <span className="placeholder col-6"></span>
        </div>
      </div>
      
      {/* Slider Shimmer */}
      <div className="position-relative">
        {/* Placeholder for the slider */}
        <div className="placeholder-glow">
          <div 
            className="placeholder rounded" 
            style={{
              height: "400px",
              width: "100%",
              backgroundColor: "#e9ecef"
            }}
          ></div>
          
          {/* Content overlay shimmer */}
          <div className="position-absolute bottom-0 start-0 p-4 w-100">
            <h1 className="fw-bold fs-1 w-75 pb-4">
              <span className="placeholder col-8"></span>
            </h1>
            <p>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-5"></span>
              <span className="placeholder col-7"></span>
            </p>
            <div className="placeholder col-2 py-3"></div>
          </div>
        </div>
        
        {/* Dots placeholder */}
        <div className="d-flex justify-content-center mt-2">
          {[...Array(3)].map((_, i) => (
            <button 
              key={i} 
              className="btn p-0 mx-1" 
              disabled
            >
              <span className="placeholder rounded-circle" style={{ width: "10px", height: "10px" }}></span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};