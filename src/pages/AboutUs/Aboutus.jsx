import React from "react";
import { Banner } from "../../components/Banner";
import MeetDoctor from "../../components/AboutUs/MeetDoctor";
import ClinicBranch from "../../components/AboutUs/ClinicBranch";
import { AboutUsDescription } from "../../components/AboutUs/AboutUsDescription";
import { Mission } from "../../components/AboutUs/Mission";

export const Aboutus = () => {
  return (
    <>
      <Banner pageTitle="About Us" />
      <div className="about-us pe-1">
        <AboutUsDescription />
        <Mission />
 
        <MeetDoctor />
        <ClinicBranch />
      </div>
    </>
  );
};