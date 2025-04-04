import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { gql, useQuery } from "@apollo/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import "../../../assets/css/HomeSlider.css";
import client from "../../../utils/ApolloClient";
import NoticeAction from "../../../actions/NoticeAction";

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

  if (loading) return <div>Loading...</div>;
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
  };

  return (
    <div className="slider-container">
      <div
        style={{
          background: "#3BBCF626",
        }}
      >
        <p
          className="scrolling-text d-flex justify-content-center align-items-center"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <Slider {...settings}>
        {sliderData.map((item, index) => {
          const featuredImageUrl =
            item._embedded["wp:featuredmedia"][0].source_url;
          return (
            <div key={index} className="slide">
              <div
                className="slide-background img-fluid"
                style={{ backgroundImage: `url(${featuredImageUrl})` }}
              >
                <div className="overlay"></div>
                <div className="content">
                  <h1 className="fw-bold fs-1 w-75 pb-4">
                    {item?.title?.rendered}
                  </h1>
                  <p>{item.description}</p>
                  <Link
                    to={`/notice/details/${item.slug}`}
                    className="btn text-white p-2 rounded bg-primary"
                  >
                    Read More{" "}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
