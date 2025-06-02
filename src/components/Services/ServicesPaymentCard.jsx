import React from "react";
import { gql, useQuery } from "@apollo/client";
import parse from "html-react-parser"; 
import client from "../../utils/ApolloClient";
import { motion } from 'framer-motion'


const GET_ITEMS = gql`
  query PLANS {
    plans {
      nodes {
        title
        content
        planFg {
          planYearly
          planMonthlyPrice
        }
      }
    }
  }
`;

export const ServicesPaymentCard = () => {
  const { loading, error, data } = useQuery(GET_ITEMS, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const plans = data?.plans?.nodes || [];

  return (
    <div className="row g-4 px-0">
      {plans.map((plan, index) => (
        <div className="col-lg-4 col-md-6 " key={index}>
          <motion.div
            className="card p-3 shadow-sm h-100 "
            whileHover={{scale:1.01}}
            style={
              index % 2 !== 0
                ? { backgroundColor: "#3BBCF6", color: "white" }
                : {}
            }
          >
            <div className="card-body mt-2 pb-3" >
              <h5 className="text-start fs-5 mb-4 fw-bold">{plan.title}</h5>
              {plan?.planFg && (
                <p
                  className="fs-6 p-1 py-2 fw-bold rounded-3 w-50 text-center"
                  style={{
                    background: index === 1 ? "white" : "#3BBCF680",
                    color: index === 1 ? "#032B7F" : "#032B7F",
                  }}
                >
                 Per Year {plan?.planFg?.planYearly}
                </p>
              )}
            </div>
            <svg width="100%" height="10" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0"
                y1="5"
                x2="100%"
                y2="5"
                stroke="#000"
                strokeWidth="1"
              />
            </svg>
            {/* Render the content safely */}
            <div className="p-3">{parse(plan.content)}</div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
