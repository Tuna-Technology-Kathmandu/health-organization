import React, { lazy, Suspense } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { HomeSlider } from "./components/HomeSlider";
import { ScrollToTop } from "../../components/ScrollToTop";

import { HomeGallery } from "./components/HomeGallery";

const HomeAbout = lazy(() =>
  import("./components/HomeAbout").then((m) => ({ default: m.HomeAbout }))
);
const HomeService = lazy(() =>
  import("./components/HomeService").then((m) => ({ default: m.HomeService }))
);
const HomeTestimonial = lazy(() =>
  import("./components/HomeTetimonial").then((m) => ({
    default: m.HomeTestimonial,
  }))
);
const HomeExperience = lazy(() =>
  import("./components/HomeExperience").then((m) => ({
    default: m.HomeExperience,
  }))
);

export const Home = () => {
  return (
    <>
      <HomeSlider />

      <Suspense fallback={null}>
        <HomeAbout />
        <HomeService />
        <HomeGallery />
        <HomeExperience />
        <HomeTestimonial />
      </Suspense>

      <ScrollToTop />
      <ToastContainer />
    </>
  );
};
