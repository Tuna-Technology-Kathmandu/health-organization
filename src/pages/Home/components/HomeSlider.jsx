import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { gql, useQuery } from "@apollo/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import "../../../assets/css/HomeSlider.css";
import client from "../../../utils/ApolloClient";
import NoticeAction from "../../../actions/NoticeAction";
import { HomeSliderShimmer } from "../../../assets/css/skelton/HomeSliderShimmer";

const GET_HOME_EXPERIENCE = gql`
  query IMAGES($id: ID!) {
    miscellaneous(id: $id, idType: SLUG) {
      content
    }
  }
`;

export const HomeSlider = () => {
  const { loading, error, data } = useQuery(GET_HOME_EXPERIENCE, {
    client,
    variables: { id: "home-marquee" },
  });

  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    NoticeAction.getNotices()
      .then((response) => {
        const data = response.data;
        setSliderData(data);
      })
      .catch((error) => console.error("Error fetching notices:", error));
  }, []);

  if (loading) return <HomeSliderShimmer />;
  if (error) return <div>Error: {error.message}</div>;

  const content = data?.miscellaneous?.content || "";
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: window.innerWidth > 768,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      {/* Marquee/Ticker Section */}
      <div
        className="marquee-container py-2 d-flex align-items-center"
        style={{ background: "#3BBCF626", minHeight: "32px" }}
      >
        <div className="container">
          <p
            className="scrolling-text text-center m-0"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>

      {/* Main Slider */}
      <Slider {...settings}>
        {sliderData.map((item, index) => {
          const featuredImageUrl =
            item._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
          if (!featuredImageUrl) return null;

          return (
            <div key={index} className="slide">
              <div
                className="slide-background"
                style={{ backgroundImage: `url(${featuredImageUrl})` }}
              >
                <div className="overlay"></div>
                <div className="container h-100">
                  <div className="content-wrapper h-100 d-flex flex-column justify-content-end pb-4 pb-lg-5">
                    <div className="content">
                      <h1 className="fw-bold display-5 display-lg-1 mb-3 mb-lg-4 w-100 w-lg-75">
                        {item?.title?.rendered}
                      </h1>
                      <p className="d-none d-md-block mb-4">
                        {item.description}
                      </p>
                      <Link
                        to={`/notice/details/${item.slug}`}
                        className="btn btn-primary text-white px-4 py-2 rounded"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
