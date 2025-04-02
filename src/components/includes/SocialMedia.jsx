import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

const SocialMedia = () => {
  return (
    <div
      className=" fw-bold d-flex pt-1"
      style={{ color: "#032B7F", fontFamily: "Poppins" }}
    >
      <a href="" className="me-2">
        <FaFacebookF
          size={25}
          className="text-white rounded-5"
          style={{ background: "#032B7F", padding: "3px" }}
        />
      </a>
      <a href="" className="me-2">
        <FaInstagram
          size={25}
          className="text-white rounded-5"
          style={{ background: "#032B7F", padding: "3px" }}
        />
      </a>
      <a href="" className="me-2">
        <TiSocialLinkedin
          size={25}
          className="text-white rounded-5"
          style={{ background: "#032B7F", padding: "3px" }}
        />
      </a>
      <a href="" className="me-2">
        <FaTwitter
          size={25}
          className="text-white rounded-5"
          style={{ background: "#032B7F", padding: "3px" }}
        />
      </a>
    </div>
  );
};

export default SocialMedia;
