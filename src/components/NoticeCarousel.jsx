import React from "react";
import Slider from "react-slick";

import featuredNotice from "../utils/featuredNotice.json";
import "../assets/css/Notice.css";

export const NoticeCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <CustomArrows />,
    prevArrow: <CustomArrows />,
  };

  return (
    <div className="notice-carousel-container">
      <Slider {...settings}>
        {featuredNotice.map((item, index) => (
          <div className="card text-bg-dark notice-card" key={item.id}>
            <img
              src={item.image}
              className="card-img rounded-4 img-fluid"
              alt={item.title}
            />
            <div className="card-img-overlay d-flex flex-column justify-content-around">
              <div className="p-3 badge rounded-pill text-bg-primary w-25">
                Featured Information
              </div>
              <div className="p-2">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Arrows Component
const CustomArrows = ({ onClick }) => (
  <div className="custom-arrow-container justify-content-between">
    <button className="custom-arrow" onClick={() => onClick("prev")}>
      &#8592;
    </button>
    <button className="custom-arrow" onClick={() => onClick("next")}>
      &#8594;
    </button>
  </div>
);
