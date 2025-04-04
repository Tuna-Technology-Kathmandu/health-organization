import React from "react";
import { gql, useQuery } from "@apollo/client";

import client from "../../../utils/ApolloClient";
import { ServicePlaceholder } from "../../../assets/css/skelton/Service";
import "../../../assets/css/ServiceCard.css";

const GET_SERVICES = gql`
  query SERVICE {
    services(first: 4) {
      nodes {
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

export const HomeService = () => {
  const { loading, error, data } = useQuery(GET_SERVICES, { client });

  if (loading) return <ServicePlaceholder />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="home-about-us" style={{ background: "#F4F3F1" }}>
      <div className="container py-5">
        <h3 className="mb-3">Our Services</h3>
        <div className="row g-3">
          {data.services.nodes.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
              <div className="card hover-card">
                <center>
                  <img
                    src={item.featuredImage.node.mediaItemUrl}
                    alt={item.title}
                    className="img-fluid my-3 rounded-circle"
                    style={{ width: 150, height: 150 }}
                  />
                </center>
                <div className="card-body">
                  <h5 className="fw-bold text-center">{item.title}</h5>
                  <p
                    className="p-1"
                    dangerouslySetInnerHTML={{ __html: item.excerpt }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
