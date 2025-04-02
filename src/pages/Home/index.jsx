import React from "react";

import { HomeSlider } from "./components/HomeSlider";
import { HomeAbout } from "./components/HomeAbout";
import { HomeService } from "./components/HomeService";
import { HomeTestimonial } from "./components/HomeTetimonial";
import HomeGallery from "./components/HomeGallery";
import { ScrollToTop } from "../../components/ScrollToTop";
import HomeExperience from "./components/HomeExperience";

export const Home = () => {
  return (
    <>
      <HomeSlider />
      <HomeAbout />
      <HomeService />
      <HomeGallery />
      <HomeExperience />
      <HomeTestimonial />
    </>
  );
};
