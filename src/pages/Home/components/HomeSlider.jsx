import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../assets/css/HomeSlider.css";
import { Link } from "react-router-dom";

const images = [
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
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="slide">
            <div
              className="slide-background"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="overlay"></div>
              <div className="content">
                <h1>{item.title}</h1>
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
