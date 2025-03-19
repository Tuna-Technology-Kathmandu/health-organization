import React from "react";

import { IoIosMailUnread } from "react-icons/io";
import { CiMobile4 } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Topbar = () => {
  return (
    <div className="top-bar fw-bold" style={{text:"#032B7F", fontFamily:"Poppins"}}>
      <div className="container d-flex justify-content-between align-items-center py-3"
      >
        <div style={{color:"#032B7F", fontFamily:"Poppins"}}>
          <IoIosMailUnread />{" "}
          <a
            href="mailto:info@allnepalhealtreatment.com"
            className="text-decoration-none text-dark ms-2"
          >
            info@allnepalhealtreatment.com
          </a>
        </div>
        <div style={{color:"#032B7F", fontFamily:"Poppins"}}>
          <CiMobile4 />{" "}
          <a
            href="tel:9761647713"
            className="text-decoration-none text-dark ms-2"
          >
            987009990, 9888900098
          </a>
        </div>
        <div style={{color:"#032B7F", fontFamily:"Poppins"}} className="">
            <span className="me-2">Follow Us</span>
            <FaFacebook className="border text-white" style={{background:"#032B7F"}}/>{" "}
            <FaInstagram />{" "}
            <FaLinkedin/>{" "}
            <FaXTwitter /> 
        </div>
      </div>
    </div>
  );
};