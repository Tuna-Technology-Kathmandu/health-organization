import React, {useState} from 'react';
import { gql, useQuery } from "@apollo/client";
import client from "../../../utils/ApolloClient";
import "../../Home/components/HomeGallery.css"

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

export const HomeGallery = () => {
const [selectedImage, setSelectedImage] = useState(null);
  const { loading, error, data } = useQuery(GET_GALLERY_IMAGES, {
    client,
    variables: { id: "35" },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  const imageUrls = data?.page?.content ? extractImages(data.page.content) : [];

  return (
    <div className="container-fluid py-5">
      <p className='fs-4 fw-bold'>Our Gallery</p>
      <div className="masonry-layout my-5">
        {imageUrls.length > 0 ? (
          imageUrls.map((src, index) => (
            <div key={index} className="masonry-item" onClick={() => setSelectedImage(src)}>
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="gallery-image"
               // style={{ height: `${180 + (index % 4) * 40}px` }}
                 loading="lazy"
              />
            </div>
          ))
        ) : (
          <p>No images found in gallery</p>
        )}
      </div>
      
      <div className='d-flex justify-content-center'>
        <Link to="/gallery" className='px-3 py-2 text-decoration-none text-white rounded-5 '
        style={{
            background:"#3BBCF6",
            fontSize:"18px"
        }}>
            View All</Link>
      </div>
     {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>&times;</button>
            <img src={selectedImage} alt="Preview" className="lightbox-image" />
          </div>
        </div>
      )}
    </div>
  );
};
