import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import NoticeAction from "../../../actions/NoticeAction";

export const HomeCarousel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    NoticeAction.getNotices()
      .then((response) => {
        const data = response.data;
        setData(data);
      })
      .catch((error) => console.error("Error fetching notices:", error));
  }, []);

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
        {data.map((item, index) => (
            <p>{item.title}</p>
        ))}
      </Slider>
    </div>
  );
};

// Custom Arrows Component
const CustomArrows = ({ onClick }) => (
  <div className="custom-arrow-container justify-content-between">
    <button className="custom-arrow rounded-4 text-white fw-bold" style={{ background:"#032B7F"}} onClick={() => onClick("prev")}>
      &#8592;
    </button>
    <button className="custom-arrow rounded-4 text-white fw-bold" style={{ background:"#032B7F"}} onClick={() => onClick("next")}>
      &#8594;
    </button>
  </div>
);
