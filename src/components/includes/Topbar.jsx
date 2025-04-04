import React from "react";

import { IoIosMailUnread } from "react-icons/io";
import { CiMobile4 } from "react-icons/ci";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";

export const Topbar = () => {
  return (
    <div className="top-bar fs-6" style={{ text: "#032B7F", fontFamily: "Poppins" }}>
  <div className=" py-2 px-2">
    <div className="row align-items-center">
      <div className="col-md-4 text-center  mb-2 mb-md-0" style={{ color: "#032B7F", fontFamily: "Poppins" }}>
        <IoIosMailUnread /> {""} 
        <a href="mailto:info@allnepalhealtreatment.com" className="text-decoration-none" style={{ color: "#032B7F" }}>
          info@allnepalhealtreatment.com
        </a>
      </div>
      <div className="col-md-4 text-center mb-2 mb-md-0" style={{ color: "#032B7F", fontFamily: "Poppins" }}>
        <CiMobile4 /> 
        <a href="tel:9761647713" className="text-decoration-none" style={{ color: "#032B7F" }}>
          987009990, 9888900098
        </a>
      </div>
      <div className="col-md-4 text-center  fw-bold" style={{ color: "#032B7F", fontFamily: "Poppins" }}>
        <span className="me-2">Follow Us</span>
        <a href="">
          <FaFacebookF size={20} className="text-white me-1 rounded-5" style={{ background: "#032B7F", padding: "3px" }} />
        </a>
        <a href="">
          <FaInstagram size={20} className="text-white me-1 rounded-5" style={{ background: "#032B7F", padding: "3px" }} />
        </a>
        <a href="">
          <TiSocialLinkedin size={20} className="text-white me-1 rounded-5" style={{ background: "#032B7F", padding: "1px" }} />
        </a>
        <a href="">
          <FaXTwitter size={20} className="text-white me-1 rounded-5" style={{ background: "#032B7F", padding: "3px" }} />
        </a>
      </div>
    </div>
  </div>
</div>

  );
};