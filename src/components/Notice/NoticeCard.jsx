import React from "react";
import { useQuery, gql } from "@apollo/client";
import { FiLink } from "react-icons/fi";
import client from "../../utils/ApolloClient";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {data.notices.nodes.map((item, index) => (
        <div key={index}>
          <div className="d-flex flex-row mb-3">
            <div className="p-4">
              <FiLink />
            </div>
            <div className="p-2">
              <h6>{item?.title || ""}</h6>
              <p>{new Date(item.date).toDateString()}</p>
            </div>
          </div>
          {index !== data.notices.nodes.length - 1 && <hr />}
        </div>
      ))}
    </>
  );
};
