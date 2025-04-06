import React from "react";
import { useQuery, gql } from "@apollo/client";
import { FiLink } from "react-icons/fi";
import client from "../../utils/ApolloClient";
import { Link } from "react-router-dom";

const GET_POSTS = gql`
  query NOTICES {
    notices {
      nodes {
        title
        slug
        date
      }
    }
  }
`;

export const NoticeCard = () => {
  const { loading, error, data } = useQuery(GET_POSTS, { client });

  if (loading) {
    return (
      <div>
        {[...Array(5)].map((_, index) => (
          <div key={index} className="d-flex flex-row mb-3">
            <div className="p-4">
              <div className="placeholder-glow">
                <div className="placeholder rounded-circle" style={{ width: "40px", height: "40px" }}></div>
              </div>
            </div>
            <div className="p-2 w-100">
              <div className="placeholder-glow">
                <span className="placeholder col-6"></span>
              </div>
              <div className="placeholder-glow mt-2">
                <span className="placeholder col-4"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {data.notices.nodes.map((item, index) => (
        <div key={index}>
          <Link to={`details/${item.slug}`} className="d-flex flex-row mb-3">
            <div className="p-4">
              <FiLink />
            </div>
            <div className="p-2">
              <h6>{item?.title || ""}</h6>
              <p>{new Date(item.date).toDateString()}</p>
            </div>
          </Link>
          {index !== data.notices.nodes.length - 1 && <hr />}
        </div>
      ))}
    </>
  );
};
