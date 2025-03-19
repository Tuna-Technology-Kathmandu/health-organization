import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center px-4 pb-2 pt-2">
        <div className="">
          <img
            src="https://placehold.co/600x400"
            className=""
            style={{
              width: "112px",
              height: "83px",
            }}
          />
        </div>
        <div
          className=""
          style={{
            fontFamily: "Poppins",
          }}
        >
          <h5>
            <span className="fw-bold">All Nepal Health Treatment Clinic Nepal</span>
            <p className="d-flex justify-content-center">Raniban, Kathmandu</p>
          </h5>
        </div>
        <div
          className="px-4"
          style={{
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
        <div className="container-fluid fw-semibold"
      style={{
        fontFamily:"Poppins",
        background:"#3BBCF6",
        height:"60px",
      
      }}>
          {/* <a className="navbar-brand" href="#">
            Navbar
          </a> */}
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
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
