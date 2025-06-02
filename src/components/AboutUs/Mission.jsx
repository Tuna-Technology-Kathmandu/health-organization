import { gql, useQuery } from "@apollo/client";
import React from "react";

import client from "../../utils/ApolloClient";
import { MissionShimmer } from "../../assets/css/skelton/MissionShimmer";

const GET_ITEM = gql(`query IMAGES {
  miscellaneous(id: "63", idType: DATABASE_ID) {
    title
    content
  }
}`);

export const Mission = () => {
  let { loading, error, data } = useQuery(GET_ITEM, { client });
  if (loading) return <MissionShimmer /> ;
  if (error) return <p>Error</p>;
  return (
    <div className=" py-2 px-3 my-5 px-md-4 ms-2">
      <p className="pb-3 fs-4 fw-bold">{data.miscellaneous.title}</p>
      <div className="row d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5">
        <div className="col-lg-5 col-md-9 col-sm-9 d-flex flex-wrap">
          <img
            src="https://placehold.co/600x400"
            alt=""
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="col-lg-6 col-md-12 text-justify">
          <p
            className="lh-lg"
            dangerouslySetInnerHTML={{ __html: data.miscellaneous.content }}
          />
        </div>
      </div>
    </div>
  );
};
