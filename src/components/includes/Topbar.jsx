import React from "react";

import { IoIosMailUnread } from "react-icons/io";
import { CiMobile4 } from "react-icons/ci";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";

export const Topbar = () => {
  return (
    <div className="top-bar fw-bold" style={{text:"#032B7F", fontFamily:"Poppins"}}>
      <div className="container d-flex justify-content-between align-items-center py-3"
      >
        <div style={{color:"#032B7F", fontFamily:"Poppins"}}>
          <IoIosMailUnread />{" "}
          <a
            href="mailto:info@allnepalhealtreatment.com"
            className="text-decoration-none ms-2"
            style={{color:"#032B7F"}}
          >
            info@allnepalhealtreatment.com
          </a>
        </div>
        <div style={{color:"#032B7F", fontFamily:"Poppins"}}>
          <CiMobile4 />{" "}
          <a
            href="tel:9761647713"
            className="text-decoration-none ms-2"
            style={{color:"#032B7F"}}
          >
            987009990, 9888900098
          </a>
        </div>
        <div style={{color:"#032B7F", fontFamily:"Poppins"}} className="">
            <span className="me-2">Follow Us</span>
            <FaFacebookF  className="border text-white me-1 rounded-5 fs-5" style={{background:"#032B7F", padding:"3px"}}/>{" "}
            <FaInstagram size={20} className="border text-white me-1 rounded-5 " style={{background:"#032B7F", padding:"3px"}}/>{" "}
            <TiSocialLinkedin size={20} className="border text-white me-1 rounded-5" style={{background:"#032B7F", padding:"1px"}}/>{" "}
            <FaXTwitter size={20} className="border text-white me-1 rounded-5" style={{background:"#032B7F", padding:"3px"}}/> 
        </div>
      </div>
    </div>
  );
};