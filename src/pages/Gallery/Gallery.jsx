import React from "react";
import { Banner } from "../../components/Banner";
import galleryData from "../../utils/gallery.json";
import "../../assets/css/Gallery.css";

const getRandomHeight = () => {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return 180 + (array[0] % 121); // Random value between 180 - 300
};

export const Gallery = () => {
  return (
    <>
      <Banner pageTitle="Gallery" />
      <div className="container my-5">
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              All
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Images
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Videos
            </a>
          </li>
        </ul>
      </div>
      <div className="masonry-layout container">
        {galleryData.map((image, index) => (
          <div key={image.id} className="masonry-item">
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-image"
              style={{ height: `${getRandomHeight()}px` }}
            />
          </div>
        ))}
      </div>
    </>
  );
};
