import React from "react";
import { useQuery, gql } from "@apollo/client";
import Marquee from "react-fast-marquee";
import client from "../../../utils/ApolloClient";
import { HomeTestimonialShimmer } from "../../../assets/css/skelton/HomeTestimonialShimmer";

const GET_TESTIMONIALS = gql`
  query TESTIMONIALS {
    testimonials {
      nodes {
        id
        title
        excerpt
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export const HomeTestimonial = () => {
  const { loading, error, data } = useQuery(GET_TESTIMONIALS, { client });

  if (loading) return <HomeTestimonialShimmer />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: "50px 0", overflow: "hidden" }}>
      <div style={{ width: "100%", margin: "0 auto" }}>
        {/* Title */}
        <p className="fs-4 fw-bold container-fluid" style={{ marginBottom: "30px" }}>
          Testimonials
        </p>

        {/* Marquee */}
        <Marquee
          speed={80}
          gradient={false}
          pauseOnHover={true}
          style={{ padding: "10px 0" }}
        >
          {data.testimonials.nodes.map((testimonial) => (
            <div
              key={testimonial.id}
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                margin: "0 15px",
                borderRadius: "10px",
                boxShadow: "0px 0px 4px 2px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                width: "380px",
                maxWidth:"310px",
                minWidth:"360px",
                minHeight: "320px",
                maxHeight: "360px",
                flexShrink: 0,
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
                    src={testimonial.featuredImage.node.mediaItemUrl}
                    alt={testimonial.title}
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
                <span style={{ fontSize: "30px", fontWeight: "bold" }}>
                  &quot;
                </span>
              </div>

              {/* Testimonial Text */}
              <p 
                style={{ fontSize: "14px", lineHeight: "1.8", margin: 0 }}
                dangerouslySetInnerHTML={{ __html: testimonial.excerpt }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};