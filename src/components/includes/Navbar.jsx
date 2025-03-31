import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import SearchWidget from "./SearcHWidget";

const Navbar = () => {
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center mt-1">
        <div className="">
          <img
            src={logo}
            className=""
            style={{
              width: "75px",
              height: "55px",
            }}
          />
        </div>
        <div
          className=""
          style={{
            fontFamily: "Poppins",
          }}
        >
          <h5 className="ms-5 text-center">
            <span className="fs-5">All Nepal Health Treatment Clinic Nepal</span>
            <p className="d-flex justify-content-center fs-6">Raniban, Kathmandu</p>
          </h5>
        </div>
        <div style={{
            fontFamily: "Poppins",
          }}
        >
          <p>
            <FaPhoneAlt /> {""}
            01-4950371
          </p>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-bg">

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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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