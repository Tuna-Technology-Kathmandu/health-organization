import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import client from "../../utils/ApolloClient";
import { Banner } from "../../components/Banner";
import "../Home/components/HomeGallery.css";

const GET_IMAGE = gql`
  query IMAGES($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      title
      content(format: RENDERED)
    }
  }
`;

// Helper to extract images
const extractImages = (htmlContent) => {
  if (!htmlContent) return [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");
  return Array.from(doc.querySelectorAll("img")).map((img) => img.src);
};

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { loading, error, data } = useQuery(GET_IMAGE, {
    client,
    variables: { id: "35" },
  });

  if (loading)
    return (
      <>
        <Banner pageTitle="Gallery" />
        <GalleryShimmer />
      </>
    );

  if (error) return <p>Error: {error.message}</p>;

  const imageUrls = data?.page?.content ? extractImages(data.page.content) : [];

  return (
    <>
      <Banner pageTitle="Gallery" />
      <div className="masonry-layout container-fluid my-5">
        {imageUrls.length > 0 ? (
          imageUrls.map((src, index) => (
            <div
              key={index}
              className="masonry-item"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="gallery-image"
                loading="lazy"
              />
            </div>
          ))
        ) : (
          <p>No images found in gallery</p>
        )}
      </div>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
            <img src={selectedImage} alt="Preview" className="lightbox-image" />
          </div>
        </div>
      )}
    </>
  );
};

// Gallery Shimmer Component
const GalleryShimmer = () => {
  const shimmerItems = Array(6).fill(0);

  return (
    <div className="masonry-layout container my-5">
      {shimmerItems.map((_, index) => (
        <div key={index} className="masonry-item placeholder-glow">
          <div
            className="placeholder"
            style={{
              height: `${180 + (index % 4) * 40}px`,
              width: "100%",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};
