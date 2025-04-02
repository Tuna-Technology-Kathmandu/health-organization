import { gql, useQuery } from "@apollo/client";
import React from "react";

import client from "../../utils/ApolloClient";
import { AboutUsDescriptionShimmer } from "../../assets/css/skelton/AboutUsDescriptionShimmer";

const GET_ITEM = gql(`query IMAGES {
  miscellaneous(id: "64", idType: DATABASE_ID) {
    title
    content
  }
}`);

export const AboutUsDescription = () => {
  let { loading, error, data } = useQuery(GET_ITEM, { client });
  if (loading) return <AboutUsDescriptionShimmer />;
  if (error) return <p>Error</p>;

  return (
    <div className=" py-2 my-5 px-md-4 ms-2 w-100">
      <h2 className="mb-3">{data.miscellaneous.title}</h2>
      <div className="row d-flex align-items-between justify-content-between g-3">
        <div className="col-lg-7 col-md-12 d-flex flex-wrap">
          <p
            className="lh-lg text-justify"
            dangerouslySetInnerHTML={{ __html: data.miscellaneous.content }}
          />
        </div>
        <div className="col-lg-5 col-md-12 d-flex justify-content-center">
          <img
            src="https://placehold.co/600x400"
            alt=""
            className="img-fluid"
            style={{ maxWidth: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};
