import React from "react";

export const ClinicBranchShimmer = () => {
  const shimmerItems = [1, 2, 3, 4];

  return (
    <div>
      <div className="py-5 mx-4">
        {/* Title placeholder */}
        <h4 className="pb-4 placeholder-glow">
          <span className="placeholder col-4"></span>
        </h4>
        
        <div className="row">
          {shimmerItems.map((item) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={item}>
              <div 
                className="card shadow-sm d-flex justify-content-center align-items-center placeholder-glow" 
                style={{ position: "relative", margin: "2px" }}
              >
                {/* Image placeholder */}
                <div 
                  className="img-fluid my-5 border rounded-circle placeholder" 
                  style={{ 
                    width: "50%",
                    aspectRatio: "1/1",
                    backgroundColor: "#e9ecef"
                  }}
                ></div>
                
                <div className="card-body text-center mb-2 w-100">
                  {/* Branch name placeholder */}
                  <h6 className="branch-Name fw-bold placeholder-glow">
                    <span className="placeholder col-8"></span>
                  </h6>
                  
                  {/* Address placeholder */}
                  <div className="placeholder-glow mt-2">
                    <span className="placeholder col-10"></span>
                    <span className="placeholder col-12 mt-1"></span>
                    <span className="placeholder col-7 mt-1"></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};