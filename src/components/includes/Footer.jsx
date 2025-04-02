import React from "react";
import { Link } from "react-router-dom";

import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";

import logo from "../../assets/images/logo.png";

const footerLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "Gallery",
    link: "/gallery",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
  },
];

const Footer = () => {
  return (
    <>
      <div
        className="footer-container py-5"
        style={{ background: "#3BBCF659" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <center>
                <img
                  src={logo}
                  alt="all-nepal-health-treatment-clinic"
                  className="img-fluid"
                />

                <h5 className="mt-3">All Nepal Health Treatment Clinic</h5>
              </center>
            </div>
            <div className="col-lg-2">
              <h4 className="mb-4">Links</h4>
              <ul className="list-unstyled fw-bold">
                <li>
                  <Link to="/" className="text-decoration-none">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className="text-decoration-none">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-decoration-none">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/service" className="text-decoration-none">
                    Facilities & Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="text-decoration-none">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/notice" className="text-decoration-none">
                    Notice
                  </Link>
                </li>
              <ul className="">
                {footerLinks.map((link, ind) => (
                  <li>
                    <Link
                      to={link.link}
                      className="text-reset text-decoration-none"
                      key={ind}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4">
              <h4 className="mb-4">Contact Us</h4>
              <p className="mb-4">
                <FaPhoneAlt />{" "}
                <a
                  href="tel:+9778899809"
                  className="ms-3 text-decoration-none text-dark"
                >
                  9778899809
                </a>
              </p>{" "}
              <p>
                <IoIosMailUnread />{" "}
                <a
                  href="mailto:info@someone.com"
                  className="ms-3 text-decoration-none text-dark"
                >
                  info@someone.com
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <h5>All Nepal Health Treatment Clinic</h5>
              <p className="text-muted">Raniban, Kathmandu</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423.57931784905213!2d85.28967497340673!3d27.736395755724246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18b8ffddf73b%3A0x62ea8cea6c24a861!2sNepal%20Health%20Treatment%20Clinic!5e0!3m2!1sen!2snp!4v1742318398722!5m2!1sen!2snp"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-white footer-bottom py-2"
        style={{ background: "#032B7FCC" }}
      >
        <center>
          <p>Copyright &copy; 2024. All Nepal Health Care Treatment Clinic</p>
        </center>
      </div>
    </>
  );
};

export default Footer;
