import React from "react";
import Slider from "react-slick";
import { gql, useQuery } from "@apollo/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import "../../../assets/css/HomeSlider.css";
import client from "../../../utils/ApolloClient";


const GET_HOME_EXPERIENCE = gql`
  query IMAGES($id: ID!) {
    miscellaneous(id: $id, idType: SLUG) {
      content
    }
  }
`;

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
  const { loading, error, data } = useQuery(GET_HOME_EXPERIENCE, {
    client,
    variables: { id: "home-marquee" },
  });

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
        <p className="scrolling-text d-flex justify-content-center align-items-center"  dangerouslySetInnerHTML={{__html: content}}/>
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
                <Link
                  to="contact-us"
                  className="btn text-white p-2 rounded bg-primary"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
