import React from "react";
import { Banner } from "../../components/Banner";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { IoMdMail } from "react-icons/io";
import { ContactusForm } from "./components/ContactUsForm";

export const Contactus = () => {
  return (
    <>
      <Banner pageTitle="Get In Touch" />

      <div
        className="border rounded-3 shadow d-flex flex-column flex-lg-row justify-content-center align-items-center position-relative mx-auto"
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "",
          minHeight: "400px",
          background: "white",
          marginLeft: "150px",
          marginTop: "-80px",
          marginBottom: "50px",
        }}
      >
        <div
          className="mx-2 my-2 w-auto w-lg-50 w-sm-25 rounded-3"
          style={{
            background: "#3BBCF6",
            width: "350px",
            height: "480px",
            backgroundColor: "#3BBCF6",
            fontFamily: "Poppins",
          }}
        >
          <div className="py-5 mx-4 w-100 w-lg-50">
            <h4 className="d-flex text-white justify-content-center align-items-center">
              Contact Information
            </h4>
            <p
              className="text-white pt-2"
              style={{
                width: "350px",
                textAlign: "center",
              }}
            >
              Feel free to contact us through your preferred method. We're here
              to assist you with your health needs.
            </p>
            <div
              className="text-white pt-2 fw-bold"
              style={{
                fontFamily: "Poppins",
              }}
            >
              <p>
                <IoLocationSharp size={25} /> {"  "}
                Nagarjun - 01, Raniban, Kathmandu
              </p>
              <p>
                <TbDeviceLandlinePhone size={25} /> +977 - 1- 4950371
              </p>
              <p className="">
                <BsFillTelephoneForwardFill size={25} /> <br />
                <div
                  className="mx-4 px-2"
                  style={{
                    marginTop: "-30px",
                  }}
                >
                  +977 9761647713 <br />
                  +977 9761647716 <br /> +977 9761647649{" "}
                </div>
              </p>
              <p>
                <IoMdMail size={25} />{" "}
                <a
                  className="fw-medium"
                  href="mailto:info@allnepalhealtreatment.com"
                >
                  allnepalhealthtreatmentclinic@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="contact-form d-flex h-100 h-lg-50 h-sm-25 text-black justify-content-center align-items-center w-100 w-lg-50">
          <ContactusForm />
        </div>
      </div>
    </>
  );
};
