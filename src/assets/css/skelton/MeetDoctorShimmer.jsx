import React from "react";

export const MeetDoctorShimmer = () => {
  const shimmerItems = [1, 2, 3, 4];

  return (
    <div className="meet-doctor" style={{ background: "#F4F3F1" }}>
      <div className="py-5 mx-4">
        <div className="ms-3">
          {/* Title placeholder */}
          <h3 className="pb-4 placeholder-glow">
            <span className="placeholder col-4"></span>
          </h3>
          
          <div className="row">
            {shimmerItems.map((item) => (
              <div className="col-lg-3 col-md-6 col-sm-6 rounded-2" key={item}>
                <div 
                  className="card py-2 placeholder-glow" 
                  style={{ position: "relative", margin: "5px" }}
                >
                  <center>
                    <div 
                      className="placeholder rounded-circle" 
                      style={{
                        width: "170px",
                        height: "170px",
                        margin: "1rem 0",
                        backgroundColor: "#e9ecef"
                      }}
                    ></div>
                  </center>
                  <div className="card-body">
                    <h4 className="text-center placeholder-glow">
                      <span className="placeholder col-8"></span>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};