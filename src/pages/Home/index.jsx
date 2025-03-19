import React from "react";

import { HomeSlider } from "./components/HomeSlider";
import { HomeAbout } from "./components/HomeAbout";
import { HomeService } from "./components/HomeService";
import { HomeTestimonial } from "./components/HomeTetimonial";

export const Home = () => {
  return (
    <>
      <HomeSlider />
      <HomeAbout />
      <HomeService />
      <HomeTestimonial />
    </>
  );
};
