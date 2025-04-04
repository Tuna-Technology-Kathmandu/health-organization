import React from "react";
import { gql, useQuery } from "@apollo/client";
import parse from "html-react-parser"; // Import html-react-parser
import client from "../../utils/ApolloClient";

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
    <div className="row g-0">
      {plans.map((plan, index) => (
        <div className="col-lg-4" key={index}>
          <div
            className="card p-3 m-3 shadow"
            style={
              index % 2 !== 0
                ? { backgroundColor: "#3BBCF6", color: "white" }
                : {}
            }
          >
            <div className="card-body mt-4 p-0">
              <h5 className="text-start fs-5 fw-bold w-75">{plan.title}</h5>
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
          </div>
        </div>
      ))}
    </div>
  );
};
