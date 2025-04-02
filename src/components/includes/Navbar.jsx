import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import SearchWidget from "./SearcHWidget";

const Navbar = () => {
  return (
    <>
    <div className="d-flex justify-content-between align-items-center h-100 m-2">
  {/* ANHT logo section */}
  <div className="d-flex justify-content-center align-items-center mx-2">
    <Link to="/">
      <img
        src={logo}
        alt="Logo"
        style={{
          width: "75px",
          height: "55px",
        }}
      />
    </Link>
  </div>

  {/* name and address section */}
  <div className="d-flex justify-content-center align-items-center flex-column mx-2 text-center" style={{ fontFamily: "Poppins" }}>
    <span className="fs-5">All Nepal Health Treatment Clinic Nepal</span>
    <span>Raniban, Kathmandu</span>
  </div>

  {/* number section */}
  <div className="d-flex justify-content-center align-items-center flex-nowrap" style={{ fontFamily: "Poppins" }}>
  <p className="d-flex align-items-center">
    <FaPhoneAlt />
    <span className="ms-1">01-4950371</span>
  </p>
</div>

</div>


      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-bg sticky-top">

        <div className="container-fluid"

      style={{
        fontFamily:"Poppins",
        background:"#3BBCF6",
      }}>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">
                  Facilites & Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/notice">
                  Notice
                </Link>
              </li>
            </ul> 
            
          </div>
          <SearchWidget />
        </div>
      </nav>
    </>
  );
};

export default Navbar;