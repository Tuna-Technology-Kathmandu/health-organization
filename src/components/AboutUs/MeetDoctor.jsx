import React from "react";
import { gql, useQuery } from "@apollo/client";

import client from "../../utils/ApolloClient";
import { MeetDoctorShimmer } from "../../assets/css/skelton/MeetDoctorShimmer";

const GET_ITEMS = gql(`
    query TEAMS {
    teams {
      nodes {
        title
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }`);

const MeetDoctor = () => {
  const { loading, error, data } = useQuery(GET_ITEMS, { client });

  if (loading) return <MeetDoctorShimmer />;
  if (error) return <p>Error</p>;

  return (
    <>
      <div
        className="meet-doctor"
        style={{
          background: "#F4F3F1",
        }}
      >
        <div className=" py-5 mx-md-4 mx-2">
          <div className="ms-3">
            <p className="pb-3 fs-4 fw-bold">Meet our Doctors</p>
            <div className="row">
              {data.teams.nodes.map((item, index) => (
                <div
                  className="col-lg-3 col-md-4 col-sm-6 rounded-2"
                  key={index}
                >
                  <div
                    className="card py-2"
                    style={{
                      position: "relative",
                      margin: "5px",
                    }}
                  >
                    <center>
                      <img
                        src={item.featuredImage.node.mediaItemUrl}
                        className="img-fluid my-3 rounded-circle"
                        alt={item.title}
                        style={{
                          width: "170px",
                          height: "170px",
                        }}
                      />
                    </center>
                    <div className="card-body">
                      <h6 className="text-center fw-bold">{item.title}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetDoctor;
