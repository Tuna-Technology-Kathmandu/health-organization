import React from "react";
import { Banner } from "../../components/Banner";
import galleryData from "../../utils/gallery.json";
import "../../assets/css/Gallery.css";

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
      <div className="gallery-container">
        {galleryData.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </>
  );
};
