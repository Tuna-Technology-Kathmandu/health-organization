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
        <AboutUsDescription />
        <Mission />
        <MeetDoctor />
        <ClinicBranch />
      </div>
    </>
  );
};

export default Aboutus;
