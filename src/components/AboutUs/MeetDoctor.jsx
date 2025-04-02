import React from "react";
import { gql, useQuery } from "@apollo/client";

import client from "../../utils/ApolloClient";

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

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <div
        className="meet-doctor"
        style={{
          background: "#F4F3F1",
        }}
      >
        <div className=" py-5 mx-4">
          <div className="ms-3">
            <h3 className="pb-4">Meet our Doctors</h3>
            <div className="row">
              {data.teams.nodes.map((item, index) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 rounded-2"
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
                      <h4 className="text-center">{item.title}</h4>
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
