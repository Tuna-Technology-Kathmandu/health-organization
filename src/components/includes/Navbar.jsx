import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import SearchWidget from "./SearcHWidget";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data to search (replace this with actual data)
  const data = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Facilites & Services", link: "/service" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact Us", link: "/contact-us" },
    { name: "Notice", link: "/notice" },
  ];

  // Filter data based on search term
  const filteredResults = searchTerm
    ? data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // Debugging: Log search term and results
  console.log("Search Term:", searchTerm);
  console.log("Filtered Results:", filteredResults);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center h-100 m-2">
        <div className="d-flex justify-content-center align-items-center mx-2">
          <Link to="/">
            <img src={logo} alt="Logo" style={{ width: "75px", height: "55px" }} />
          </Link>
        </div>

        <div className="d-flex justify-content-center align-items-center flex-column mx-2 text-center" style={{ fontFamily: "Poppins" }}>
          <span className="fs-5">All Nepal Health Treatment Clinic Nepal</span>
          <span>Raniban, Kathmandu</span>
        </div>

        <div className="d-flex justify-content-center align-items-center flex-nowrap" style={{ fontFamily: "Poppins" }}>
          <p className="d-flex align-items-center">
            <FaPhoneAlt />
            <span className="ms-1">01-4950371</span>
          </p>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-bg sticky-top">
        <div className="container-fluid" style={{ fontFamily: "Poppins", background: "#3BBCF6" }}>
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
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about-us">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/service">Facilites & Services</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/gallery">Gallery</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact-us">Contact Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/notice">Notice</Link></li>
            </ul>
          </div>
          <SearchWidget setSearch={setSearchTerm} results={filteredResults} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
