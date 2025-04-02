import React from "react";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import client from "../../../utils/ApolloClient";
import { HomeAboutShimmer } from "../../../assets/css/skelton/HomeAboutShimmer";

const GET_ITEM = gql(`query IMAGES {
  miscellaneous(id: "75", idType: DATABASE_ID) {
    title
    content
    featuredImage {
      node {
        mediaItemUrl
      }
    }
  }
}`);

export const HomeAbout = () => {
  let { loading, error, data } = useQuery(GET_ITEM, { client });
  if (loading) return <HomeAboutShimmer />;
  if (error) return <p>Error</p>;
  return (
    <div className="home-about-us">
      <div className="container py-5 my-5">
        <h3 className="mb-3">About Us</h3>
        <div className="row g-5">
          <div className="col-lg-7 ">
            <p
              className="lh-lg text-justify"
              dangerouslySetInnerHTML={{ __html: data.miscellaneous.content }}
            />
          </div>
          <div className="col-lg-5">
            <img
              src={data?.miscellaneous?.featuredImage?.node?.mediaItemUrl}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
        <Link to="about-us" className="btn btn-primary m-2 ">
          View More
        </Link>
      </div>
    </div>
  );
};