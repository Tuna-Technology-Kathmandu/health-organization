import React from "react";
import { gql, useQuery } from "@apollo/client";

import client from "../../utils/ApolloClient";
import '../../assets/css/ServiceCard.css';
import { ServicePlaceholder } from "../../assets/css/skelton/Service";

const GET_ITEMS = gql(`
  query IMAGES {
  services {
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
}`);

export const ServicesCard = () => {
  const { loading, error, data } = useQuery(GET_ITEMS, { client });

  if (loading) return <p><ServicePlaceholder/> </p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="row g-4 my-3">
      {data.services.nodes.map((item, index) => (
        <div className="col-lg-4">
          <div className="card p-4">
            <center>
              <img
                src={item.featuredImage.node.mediaItemUrl}
                alt={item.title}
                className="my-3 rounded-circle"
                style={{width: 150, height: 150}}
              />
            </center>
            <div className="card-body text-center mt-4">
              <h5>{item.title}</h5>
              <p
                dangerouslySetInnerHTML={{ __html: item.excerpt }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
