import React from 'react';
import { gql, useQuery } from "@apollo/client";
import client from "../../../utils/ApolloClient";

import { Link } from 'react-router-dom';

// extract image URL from HTML
const extractImages = (htmlContent) => {
  if (!htmlContent) return [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");
  return Array.from(doc.querySelectorAll("img")).map((img) => img.src);
};

const GET_GALLERY_IMAGES = gql`
  query GET_GALLERY_IMAGES($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      title
      content(format: RENDERED)
    }
  }
`;

const HomeGallery = () => {

  const { loading, error, data } = useQuery(GET_GALLERY_IMAGES, {
    client,
    variables: { id: "35" },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  const imageUrls = data?.page?.content ? extractImages(data.page.content) : [];

  return (
    <div className="container py-5">
      <h2>Our Gallery</h2>
      <div className="masonry-layout my-5">
        {imageUrls.length > 0 ? (
          imageUrls.map((src, index) => (
            <div key={index} className="masonry-item">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="gallery-image"
                style={{ height: `${180 + (index % 4) * 40}px` }} // Random height for images
                loading="lazy"
              />
            </div>
          ))
        ) : (
          <p>No images found in gallery</p>
        )}
      </div>
      
      <div className='d-flex justify-content-center'>
        <Link to="/gallery" className='p-2 text-decoration-none text-white'
        style={{
            background:"#3BBCF6",
            fontSize:"18px"
        }}>
            View All</Link>
      </div>
    </div>
  );
};

export default HomeGallery;
