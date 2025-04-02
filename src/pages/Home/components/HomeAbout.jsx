import React from "react";
import { Link } from "react-router-dom";
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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              molestiae tempora iure numquam aspernatur, autem accusamus quod
              corporis sapiente maxime? Excepturi inventore, recusandae ab
              repellendus quisquam accusamus deserunt et harum. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Enim molestiae
              tempora iure numquam aspernatur, autem accusamus quod corporis
              sapiente maxime? Excepturi inventore, recusandae ab repellendus
              quisquam accusamus deserunt et harum.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              molestiae tempora iure numquam aspernatur, autem accusamus quod
              corporis sapiente maxime? Excepturi inventore, recusandae ab
              repellendus quisquam accusamus deserunt et harum. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Enim molestiae
              tempora iure numquam aspernatur, autem accusamus quod corporis
              sapiente maxime? Excepturi inventore, recusandae ab repellendus
              quisquam accusamus deserunt et harum.
            </p>
            <Link to="about-us" className="btn btn-primary m-2">View More</Link>
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
