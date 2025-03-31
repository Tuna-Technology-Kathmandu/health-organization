import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const HomeTestimonialShimmer = () => {
  // We'll create 3 shimmer items to match your slidesToShow
  const shimmerItems = [1, 2, 3];

  return (
    <div style={{ padding: "50px 0" }}>
      <div style={{ width: "90%", margin: "0 auto", position: "relative" }}>
        {/* Title and navigation buttons shimmer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <h3 className="placeholder-glow" style={{ margin: 0 }}>
            <span className="placeholder col-3"></span>
          </h3>
          <div className="placeholder-glow">
            <span className="placeholder col-1 me-2"></span>
            <span className="placeholder col-1"></span>
          </div>
        </div>

        {/* Slider shimmer */}
        <div className="row">
          {shimmerItems.map((item) => (
            <div key={item} className="col-md-4 mb-3 mb-md-0" style={{ padding: "0 10px" }}>
              <div
                className="placeholder-glow"
                style={{
                  backgroundColor: "#fff",
                  padding: "20px",
                  margin: "8px",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                  height: "100%",
                }}
              >
                {/* Author section shimmer */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "15px",
                    padding: "16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span
                      className="placeholder rounded-circle"
                      style={{ width: "40px", height: "40px", marginRight: "10px" }}
                    ></span>
                    <h6 style={{ margin: 0, fontSize: "16px" }}>
                      <span className="placeholder col-5"></span>
                    </h6>
                  </div>
                  <span className="placeholder col-1"></span>
                </div>

                {/* Testimonial text shimmer */}
                <div>
                  <p className="placeholder-glow" style={{ margin: 0 }}>
                    <span className="placeholder col-12 mb-2"></span>
                    <span className="placeholder col-12 mb-2"></span>
                    <span className="placeholder col-10 mb-2"></span>
                    <span className="placeholder col-8"></span>
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