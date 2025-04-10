import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import NoticeAction from "../../actions/NoticeAction";
import "../../assets/css/Notice.css";

export const NoticeCarousel = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    NoticeAction.getNotices()
      .then((response) => {
        const data = response.data;
        setData(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching notices:", error);
        setLoading(false);
      });
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

  // Shimmer loading UI for carousel
  if (loading) {
    return (
      <div className="notice-carousel-container">
        <Slider {...settings}>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="card text-bg-dark notice-card">
              <div className="placeholder-glow">
                <div
                  className="placeholder card-img rounded-4 img-fluid"
                  style={{ height: "200px" }}
                ></div>
              </div>
              <div className="card-img-overlay d-flex flex-column justify-content-around">
                <div className="placeholder-glow">
                  <span className="placeholder col-3 badge rounded-pill text-bg-primary"></span>
                </div>
                <div className="placeholder-glow mt-2">
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-4 mt-2"></span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  return (
    <div className="notice-carousel-container">
      <Slider {...settings}>
        {data.map((item, index) => {
          const featuredImageUrl =
            item._embedded["wp:featuredmedia"][0].source_url;

          return (
            <div className="card text-bg-dark notice-card" key={index}>
              {featuredImageUrl && (
                <img
                  src={featuredImageUrl}
                  className="card-img rounded-4 img-fluid"
                  alt={item.title.rendered}
                />
              )}
              <div className="card-img-overlay d-flex flex-column justify-content-around">
                <div className="p-3 badge rounded-pill text-bg-primary w-25">
                  Featured Information
                </div>
                <div className="p-2">
                  <h4>{item.title.rendered}</h4>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.excerpt.rendered,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

// Custom Arrows Component
const CustomArrows = ({ onClick }) => (
  <div className="custom-arrow-container justify-content-between">
    <button
      className="custom-arrow rounded-4 text-white fw-bold"
      style={{ background: "#032B7F" }}
      onClick={() => onClick("prev")}
    >
      &#8592;
    </button>
    <button
      className="custom-arrow rounded-4 text-white fw-bold"
      style={{ background: "#032B7F" }}
      onClick={() => onClick("next")}
    >
      &#8594;
    </button>
  </div>
);
