import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";

import logo from "../../assets/images/logo.png";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <>
      <div className="footer-container pt-5 px-4" style={{ background: "#3BBCF659" }}>
        <div className="">
          <div className="row">
            <div className=" col-lg-2 ">
              <center className="mt-2">
                <img
                  src={logo}
                  alt="all-nepal-health-treatment-clinic"
                  className="img-fluid"
                />
                <h5 className="mt-3 fs-6 fw-bold">All Nepal Health Treatment Clinic</h5>
               
              </center>
              <div className=" px-4 d-flex justify-content-center" >
                <SocialMedia />
                </div>
            </div>
            <div className="col-lg-2">
              <h5 className="mt-2 fw-bold">Links</h5>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <Link to="/" className="text-decoration-none text-black">
                    Home
                  </Link>
                </li>
                <li className="text-black mb-3">
                  <Link to="/about-us" className="text-decoration-none text-black">
                    About Us
                  </Link>
                </li>
                <li className="text-black mb-3">
                  <Link to="/gallery" className="text-decoration-none text-black">
                    Gallery
                  </Link>
                </li>
                <li className="text-black mb-3">
                  <Link to="/service" className="text-decoration-none text-black">
                    Our Services
                  </Link>
                </li>
                <li className="text-black mb-3">
                  <Link to="/contact-us" className="text-decoration-none text-black">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 className="py-2 fw-bold">Contact Us</h5>
              <p className="mb-4">
                <FaPhoneAlt size={18} />{" "}
                <a
                  href="tel:+9778899809"
                  className="ms-3 text-decoration-none text-dark">
                  9778899809
                </a>
              </p>
              <p>
                <IoIosMailUnread size={18} />{" "}
                <a
                  href="mailto:info@allnepalhealtreatment.com"
                  className="ms-3 text-decoration-none text-dark"
                >
                  info@allnepalhealtreatment.com
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <h5 className="fw-bold">All Nepal Health Treatment Clinic</h5>
              <p className="text-muted">Raniban, Kathmandu</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423.57931784905213!2d85.28967497340673!3d27.736395755724246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18b8ffddf73b%3A0x62ea8cea6c24a861!2sNepal%20Health%20Treatment%20Clinic!5e0!3m2!1sen!2snp!4v1742318398722!5m2!1sen!2snp"
                width="350"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white footer-bottom py-1" style={{ background: "#032B7FCC" }}>
        <center>
          <p className="">Copyright &copy; 2024. All Nepal Health Care Treatment Clinic</p>
        </center>
      </div>
    </>
  );
};

export default Footer;
