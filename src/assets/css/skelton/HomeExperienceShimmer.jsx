import React from "react";

export const HomeExperienceShimmer = () => {
  const shimmerItems = Array(4).fill(0);

  return (
    <div
      className="d-flex p-5 flex-wrap"
      style={{ background: "#F4F3F1" }}
    >
      {shimmerItems.map((_, index) => (
        <div key={index} className="col-lg-3 col-md-3 col-3 text-center">
          <div 
            className="shimmer-effect" 
            style={{
              height: "40px",
              width: "80px",
              margin: "0 auto 10px",
              backgroundColor: "#e0e0e0",
              borderRadius: "4px"
            }}
          ></div>
          <div 
            className="shimmer-effect" 
            style={{
              height: "20px",
              width: "120px",
              margin: "0 auto",
              backgroundColor: "#e0e0e0",
              borderRadius: "4px"
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};