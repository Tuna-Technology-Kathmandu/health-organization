import React from "react";
import { Banner } from "../../components/Banner";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { IoMdMail } from "react-icons/io";

const Contactus = () => {
  return (
    <>
      <Banner pageTitle="Contactus" />

      <div className=" d-flex justify-content-center align-items-center pb-5 relative">
        <div
          className="border position-absolute shadow "
          style={{
            width: "1130px",
            height: "610px",
            background: "white",
          }}
        >
          <div
            className=" mx-4 my-2"
            style={{
              background: "white",
              width: "430px",
              height: "590px",
              backgroundColor: "#3BBCF6",
              fontFamily: "Poppins",
            }}
          >
            <div className="py-5 mx-4">
              <h4 className="d-flex text-white justify-content-center align-items-center">
                Contact Information
              </h4>
              <p
                className="text-white pt-2"
                style={{
                  width: "383px",
                  textAlign: "center",
                }}
              >
                Feel free to contact us through your preferred method. We're
                here to assist you with your health needs.
              </p>
              <div
                className="text-white pt-4 fw-bold"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                <p>
                  <IoLocationSharp size={25} /> {""}
                  Nagarjun - 01, Raniban, Kathmandu
                </p>
                <p>
                  <TbDeviceLandlinePhone size={25} /> +977 - 1- 4950371
                </p>
                <p className="">
                  <BsFillTelephoneForwardFill size={40} />
                  {""} <br />
                  <div className="mx-5">
                    +977 9761647713 <br />
                    +977 9761647716 <br /> +977 9761647649{" "}
                  </div>
                </p>
                <p>
                  <IoMdMail />
                  {"  "}
                  allnepalhealthtreatmentclinic@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
