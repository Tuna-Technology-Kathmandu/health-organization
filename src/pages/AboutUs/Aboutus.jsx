import React from "react";
import { Banner } from "../../components/Banner";
import MeetDoctor from "../../components/AboutUs/MeetDoctor";
import ClinicBranch from "../../components/AboutUs/ClinicBranch";
import { AboutUsDescription } from "../../components/AboutUs/AboutUsDescription";
import { Mission } from "../../components/AboutUs/Mission";

const Aboutus = () => {
  return (
    <>
      <Banner pageTitle="About Us" />
     <div className="about-us">
  <div className=" py-2 my-5 px-md-4 ms-2 w-100">
    <h2 className="mb-3">About Us</h2>
    <div className="row d-flex align-items-between justify-content-between g-3">
      <div className="col-lg-7 col-md-12 d-flex flex-wrap">
        <p className=" m-2 text-justify" style={{ fontFamily: "Poppins", lineHeight: "40px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
          voluptas sit aspernatur aut odit aut fugit, sed quia.
        </p>
      </div>
      <div className="col-lg-5 col-md-12 d-flex justify-content-center">
        <img
          src="https://placehold.co/600x400"
          alt=""
          className="img-fluid p-3"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  </div>
  <div className=" py-2 my-5 px-md-4 ms-2">
    <h2 className="mb-3">Our Mission and Vision</h2>
    <div className="row d-flex flex-column flex-lg-row align-items-center justify-content-between g-3">
      <div className="col-lg-5 col-md-12 d-flex flex-wrap">
        <img
          src="https://placehold.co/600x400"
          alt=""
          className="img-fluid p-2"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <div className="col-lg-7 col-md-12">
        <p className="m-1 text-justify" style={{ fontFamily: "Poppins", lineHeight: "40px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
          voluptas sit aspernatur aut odit aut fugit, sed quia.
        </p>
      </div>
    </div>
  </div>
  <MeetDoctor />
  <ClinicBranch />
</div>

    </>
  );
};

export default Aboutus;
