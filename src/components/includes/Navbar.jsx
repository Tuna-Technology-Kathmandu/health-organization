import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* Top Bar - Hidden on small screens */}
      <div className="d-none d-md-flex justify-content-between border-bottom px-3 px-lg-5 py-2 bg-light">
        <div className="p-2 d-flex align-items-center">
          <MdOutlineEmail className="text-primary" />
          <span className="ms-2 font-monospace small text-truncate">info@allnepalclinic.com</span>
        </div>
        <div className="p-2 d-flex align-items-center">
          <span className="me-2 text-muted small">Follow us:</span>
          <a
            href="#"
            className="mx-1 bg-primary rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: "25px", height: "25px" }}
          >
            <FaFacebook className="text-white" size={14} />
          </a>
          <a
            href="#"
            className="mx-1 bg-info rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: "25px", height: "25px" }}
          >
            <FaTwitter className="text-white" size={14} />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm px-3 px-lg-5 py-2">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="All Nepal Clinic"
              style={{ height: "35px" }}
              className="img-fluid"
            />
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link className="nav-link text-dark px-2 px-lg-3" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item d-none d-lg-block px-1 px-lg-2 text-secondary">|</li>
              <li className="nav-item">
                <Link className="nav-link text-dark px-2 px-lg-3" to="/about-us">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item d-none d-lg-block px-1 px-lg-2 text-secondary">|</li>
              <li className="nav-item">
                <Link className="nav-link text-dark px-2 px-lg-3" to="/service">
                  <span className="d-none d-md-inline">FACILITIES & </span>SERVICES
                </Link>
              </li>
              <li className="nav-item d-none d-lg-block px-1 px-lg-2 text-secondary">|</li>
              <li className="nav-item">
                <Link className="nav-link text-dark px-2 px-lg-3" to="/gallery">
                  GALLERY
                </Link>
              </li>
              <li className="nav-item d-none d-lg-block px-1 px-lg-2 text-secondary">|</li>
              <li className="nav-item">
                <Link className="nav-link text-dark px-2 px-lg-3" to="/contact-us">
                  CONTACT
                </Link>
              </li>
              <li className="nav-item d-none d-lg-block px-1 px-lg-2 text-secondary">|</li>
              <li className="nav-item">
                <Link className="nav-link text-dark px-2 px-lg-3" to="/notice">
                  NOTICE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;