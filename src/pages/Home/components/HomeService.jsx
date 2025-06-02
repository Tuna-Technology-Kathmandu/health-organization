import React from "react";
import { gql, useQuery } from "@apollo/client";

import client from "../../../utils/ApolloClient";
import { ServicePlaceholder } from "../../../assets/css/skelton/Service";
import "../../../assets/css/ServiceCard.css";
import { motion } from 'framer-motion'

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
      <div className="container-fluid py-5">
        <p className="mb-3 mb-5 fw-bold fs-4">Our Services</p>
        <div className="row g-3 ">
          {data.services.nodes.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
              <motion.div className="card h-100 "
               whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}>
                <center>
                  <img
                    src={item.featuredImage.node.mediaItemUrl}
                    alt={item.title}
                    className="img-fluid my-3 rounded-circle"
                    style={{ width: 150, height: 150 }}
                  />
                </center>
                <div className="card-body">
                  <p className="fw-bold text-center" style={{ fontSize: '18px' }}>{item.title}</p>
                  <p
                    className="text-center"  style={{ fontSize: '12px' }}
                    dangerouslySetInnerHTML={{ __html: item.excerpt }}
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
