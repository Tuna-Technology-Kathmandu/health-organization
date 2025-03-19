import React from "react";

import { IoIosMailUnread } from "react-icons/io";
import { CiMobile4 } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const Topbar = () => {
  return (
    <div className="top-bar">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div>
          <IoIosMailUnread />{" "}
          <a
            href="mailto:info@allnepalhealtreatment.com"
            className="text-decoration-none text-dark ms-2"
          >
            info@allnepalhealtreatment.com
          </a>
        </div>
        <div>
          <CiMobile4 />{" "}
          <a
            href="tel:9761647713"
            className="text-decoration-none text-dark ms-2"
          >
            987009990, 9888900098
          </a>
        </div>
        <div>
            <span className="me-2">Follow Us</span>
            <FaFacebook />{" "}
            <FaInstagram />{" "}
        </div>
      </div>
    </div>
  );
};
