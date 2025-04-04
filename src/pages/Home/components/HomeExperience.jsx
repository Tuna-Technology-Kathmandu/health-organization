import React from "react";
import { gql, useQuery } from "@apollo/client";
import client from "../../../utils/ApolloClient";

const GET_HOME_EXPERIENCE = gql`
  query IMAGES($id: ID!) {
    miscellaneous(id: $id, idType: SLUG) {
      title
      content
    }
  }
`;

const HomeExperience = () => {
  const { loading, error, data } = useQuery(GET_HOME_EXPERIENCE, {
    client,
    variables: { id: "home-counter" },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const content = data?.miscellaneous?.content || "";
  
  // Extract table data dynamically
  const extractTableData = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const rows = doc.querySelectorAll("table tbody tr");

    if (rows.length < 2) return [];

    const headers = Array.from(rows[0].querySelectorAll("td")).map(td => td.textContent.trim());
    const values = Array.from(rows[1].querySelectorAll("td")).map(td => td.textContent.trim());

    return headers.map((header, index) => ({
      title: header,
      value: values[index],
    }));
  };

  const stats = extractTableData(content);

  return (
    <div
      className="d-flex p-5 flex-wrap"
      style={{ background: "#F4F3F1" }}
    >
      {stats.map((stat, index) => (
        <div key={index} className="col-lg-3 col-md-3 col-3 text-center fw-bold">
          <span>{stat.value}+</span>
          <p>{stat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeExperience;
