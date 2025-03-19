import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery, gql } from "@apollo/client";

import client from "../../../utils/ApolloClient";

const GET_TESTIMONIALS = gql`
  query TESTIMONIALS {
    testimonials {
      nodes {
        title
        excerpt
        featuredImage {
          node {
            link
          }
        }
      }
    }
  }
`;

export const HomeTestimonial = () => {
  const { loading, error, data } = useQuery(GET_TESTIMONIALS, { client });

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let sliderRef;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: "50px 0" }}>
      <div style={{ width: "90%", margin: "0 auto", position: "relative" }}>
        {/* Title and navigation buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <h3 style={{ margin: 0 }}>Testimonials</h3>
          <div>
            <button
              onClick={() => sliderRef.slickPrev()}
              style={{
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              &#10094;
            </button>
            <button
              onClick={() => sliderRef.slickNext()}
              style={{
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              &#10095;
            </button>
          </div>
        </div>

        {/* Slider */}
        <Slider {...settings} ref={(slider) => (sliderRef = slider)}>
          {data.testimonials.nodes.map((testimonial) => (
            <div key={testimonial.id} style={{ padding: "0 10px" }}>
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "20px",
                  margin: "8px",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "15px",
                    padding: "16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={testimonial.link}
                      alt={testimonial.name}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                    />
                    <h6 style={{ margin: 0, fontSize: "16px" }}>
                      {testimonial.title}
                    </h6>
                  </div>
                  <span style={{ fontSize: "32px", fontWeight: "bold" }}>
                    &quot;
                  </span>
                </div>

                {/* Testimonial Text */}
                <p
                  style={{ fontSize: "14px", lineHeight: "1.6", margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: testimonial.excerpt }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
