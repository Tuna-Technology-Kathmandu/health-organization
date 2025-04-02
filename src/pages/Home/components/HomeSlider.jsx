import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../assets/css/HomeSlider.css";
import { Link } from "react-router-dom";

const images = [
  {
    title: "All Nepal Health Treatment Clinic asdasd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://placehold.co/600x400",
  },
  {
    title: "All Nepal Health Treatment Clinic",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://placehold.co/600x400",
  },
  {
    title: "All Nepal Health Treatment Clinic",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://placehold.co/600x400",
  },
];

export const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <div style={{
          background: "#3BBCF626"
        }}>
        <p className="scrolling-text d-flex justify-content-center align-items-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="slide">
            <div
              className="slide-background img-fluid"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="overlay"></div>
              <div className="content">
                <h1 className="fw-bold fs-1 w-75 pb-4">{item.title}</h1>
                <p>{item.description}</p>
                <Link to="contact-us" className="btn text-white p-2 rounded bg-primary">Contact Us</Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};