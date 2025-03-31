import React from "react";
import { gql, useQuery } from "@apollo/client";

import client from "../../../utils/ApolloClient";

const GET_ITEM = gql(`query IMAGES {
  miscellaneous(id: "75", idType: DATABASE_ID) {
    title
    content
  }
}`);

export const HomeAbout = () => {
  let { loading, error, data } = useQuery(GET_ITEM, { client });
  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;
  return (
    <div className="home-about-us">
      <div className="container py-5 my-5">
        <h3 className="mb-3">About Us</h3>
        <div className="row">
          <div className="col-lg-7">
            <p className="lh-lg text-justify" 
              dangerouslySetInnerHTML={{ __html: data.miscellaneous.content }}
            />

            <button className="btn btn-primary">View More</button>
          </div>
          <div className="col-lg-5">
            <img
              src="https://placehold.co/600x400"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
