import React from "react";
import { gql, useQuery } from "@apollo/client";

import client from "../../utils/ApolloClient";
import { ClinicBranchShimmer } from "../../assets/css/skelton/ClinicBranchShimmer";
import Marquee from "react-fast-marquee";

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

  if (loading) return <ClinicBranchShimmer/> ;
  if (error) return <p>Error</p>;

  return (
    <>
      <div>
        <div className=" py-5 mx-4">
          <p className="pb-4 fs-4 fw-bold ms-md-3 ms-1"> Our Clinic Branches</p>
          <Marquee pauseOnHover speed={80} className="">
            {data.branches.nodes.map((branch, index) => (
              <div className="px-md-4 px-0 col-9 col-lg-12 col-md-11 col-sm-11" key={index}>
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
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default ClinicBranch;
