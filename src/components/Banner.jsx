import React from "react";

export const Banner = ({ pageTitle }) => {
  const bannerStyle = {
    height: "55vh",
    backgroundImage: `url('https://cdn.pixabay.com/photo/2016/11/06/10/35/hospital-1802680_1280.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 1,
  };

  const breadcrumbStyle = {
    position: "absolute",
    top: "20px", // Keep it slightly from the top
    left: "50%", // Center horizontally
    transform: "translateX(-50%)", // Adjust for centering
    color: "white",
    fontSize: "14px",
    fontWeight: "bold",
    background: "rgba(0, 0, 0, 0.3)",
    padding: "8px 15px",
    borderRadius: "20px",
  };

  return (
    <div style={bannerStyle}>
      <div style={overlayStyle}></div>

      {/* Breadcrumb (Centered at Top) */}
      <div style={breadcrumbStyle}>
        <span>Home</span> &gt; <span>{pageTitle}</span>
      </div>

      {/* Page Title */}
      <div style={contentStyle}>
        <h1>{pageTitle}</h1>
      </div>
    </div>
  );
};
