import React from "react";
import { Banner } from "../../components/Banner";
import MeetDoctor from "./MeetDoctor";
import ClinicBranch from "./ClinicBranch";

const Aboutus = () => {
  return (
    <>
      <Banner pageTitle="About Us" />
      <div className="about-us">
        <div className="container AboutUs py-2 my-5 px-0 ms-4">
          <h2 className="mb-3">About Us</h2>
          <div
            className="row"
            style={{
              height: "450px",
              width: "1290px",
              marginTop: "20px",
            }}
          >
            <div
              className="col-lg-7"
              style={{
                padding: "10px",
                fontFamily: "Poppins",
                lineHeight: "40px",
                width: "712px",
              }}
            >
              <p>
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
            <div className="col-lg-5">
              <img
                src="https://placehold.co/600x400"
                alt=""
                className="img-fluid"
                style={{
                  height: "450px",
                  width: "520px",
                  marginTop: "-35px",
                  marginLeft:"-5px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="container OurMissionAndVision py-2 my-5 px-0 ms-4">
          <h2 className="mb-3">Our Mission and Vision</h2>
          <div
            className="row"
            style={{
              height: "450px",
              width: "1290px",
              marginTop: "20px",
            }}
          >
            <div className="col-lg-5">
              <img
                src="https://placehold.co/600x400"
                alt=""
                className="img-fluid"
                style={{
                  height: "430px",
                  width: "520px",
                  marginTop: "-25px",
                  marginLeft:"-5px",
                }}
              />
            </div>
            <div
              className="col-lg-7"
              style={{
                padding: "10px",
                fontFamily: "Poppins",
                lineHeight: "40px",
                width: "712px",
                height:"450px"
              }}
            >
              <p>
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
