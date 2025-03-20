import React from "react";
import { gql, useQuery } from "@apollo/client";
import client from "../../utils/ApolloClient";
import { Banner } from "../../components/Banner";
import "../../assets/css/Gallery.css";

const getRandomHeight = () => {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return 180 + (array[0] % 121); // Random value between 180 - 300
};

const GET_IMAGE = gql`
  query IMAGES($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      title
      content(format: RENDERED)
    }
  }
`;

export const Gallery = () => {
  const { loading, error, data } = useQuery(GET_IMAGE, {
    client,
    variables: { id: "35" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Function to extract image URLs from raw HTML
  const extractImages = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    return Array.from(doc.querySelectorAll("img")).map((img) => img.src);
  };

  const imageUrls = extractImages(data.page.content);

  return (
    <>
      <Banner pageTitle="Gallery" />
      {/* Masonry Layout for Images */}
      <div className="masonry-layout container my-5">
        {imageUrls.map((src, index) => (
          <div key={index} className="masonry-item">
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="gallery-image"
              style={{ height: `${getRandomHeight()}px` }}
            />
          </div>
        ))}
      </div>
    </>
  );
};
