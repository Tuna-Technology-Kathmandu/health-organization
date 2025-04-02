import React from "react";
import { gql, useQuery } from "@apollo/client";

import client from "../../utils/ApolloClient";

const GET_ITEMS = gql(`
  query IMAGES {
  branches {
    nodes {
      id
      title
      branchFg {
        country
        state
        branchAddress
      }
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
}`);

const ClinicBranch = () => {
  const { loading, error, data } = useQuery(GET_ITEMS, { client });

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <div>
        <div className=" py-5 mx-4">
          <h4 className="pb-4"> Our Clinic Branches</h4>
          <div className="row">
            {data.branches.nodes.map((branch, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                <div
                  className="card shadow-sm d-flex justify-content-center align-items-center"
                  style={{
                    position: "relative",
                    margin: "2px",
                  }}
                >
                  <img
                    src={branch.featuredImage.node.mediaItemUrl}
                    alt={branch.title}
                    className="img-fluid my-5 border rounded-circle w-50"
                    style={{}}
                  />
                  <div className="card-body text-center mb-2">
                    <h6 className=" branch-Name fw-bold ">{branch.title}</h6>
                    <span> {branch.branchFg.branchAddress}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClinicBranch;
