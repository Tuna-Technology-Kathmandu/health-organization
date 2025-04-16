import React, { useState } from "react"; // Added useState import
import { gql, useQuery } from "@apollo/client";
import client from "../../utils/ApolloClient";
import ReactImageLightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import { Banner } from "../../components/Banner";
import "../../assets/css/Gallery.css";

// Moved GalleryShimmer component before it's used
const GalleryShimmer = () => {
  // Show 6 placeholder items
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

const getRandomHeight = () => {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return 180 + (array[0] % 121);
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
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const { loading, error, data } = useQuery(GET_IMAGE, {
    client,
    variables: { id: "35" },
  });

  // Function to extract and validate image URLs
  const extractImages = (htmlContent) => {
    if (!htmlContent) return [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    return Array.from(doc.querySelectorAll("img"))
      .map((img) => img.src)
      .filter(src => src && (src.startsWith('http') || src.startsWith('/')));
  };

  const imageUrls = data?.page?.content ? extractImages(data.page.content) : [];

  if (loading) return (
    <>
      <Banner pageTitle="Gallery" />
      <GalleryShimmer />
    </>
  );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Banner pageTitle="Gallery" />
      <div className="masonry-layout container my-5">
        {imageUrls.length > 0 ? (
          imageUrls.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="masonry-item"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
              style={{ cursor: "pointer" }}
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="gallery-image"
                style={{ height: `${getRandomHeight()}px` }}
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none'; // Hide broken images
                }}
              />
            </div>
          ))
        ) : (
          <p className="text-center w-100">No images found in gallery</p>
        )}
      </div>

      {/* {isOpen && imageUrls.length > 0 && (
        <ReactImageLightbox
          mainSrc={imageUrls[photoIndex]}
          nextSrc={imageUrls[(photoIndex + 1) % imageUrls.length]}
          prevSrc={imageUrls[(photoIndex + imageUrls.length - 1) % imageUrls.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + imageUrls.length - 1) % imageUrls.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % imageUrls.length)
          }
        />
      )} */}
    </>
  );
};