import React, { useState, useRef, useEffect, lazy, Suspense } from "react";
import { HomeSlider } from "./components/HomeSlider";
import { ScrollToTop } from "../../components/ScrollToTop";

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
const HomeGallery = lazy(() =>
  import("./components/HomeGallery").then((m) => ({ default: m.HomeGallery }))
);
const HomeExperience = lazy(() =>
  import("./components/HomeExperience").then((m) => ({
    default: m.HomeExperience,
  }))
);

export const Home = () => {
  const [visibleComponents, setVisibleComponents] = useState({
    slider: true,
    about: false,
    service: false,
    gallery: false,
    experience: false,
    testimonial: false,
  });

  const refs = {
    about: useRef(null),
    service: useRef(null),
    gallery: useRef(null),
    experience: useRef(null),
    testimonial: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const componentName = entry.target.getAttribute("data-component");
            setVisibleComponents((prev) => ({
              ...prev,
              [componentName]: true,
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -200px 0px",
        threshold: 0,
      }
    );

    Object.entries(refs).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.setAttribute("data-component", key);
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(refs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <>
      <HomeSlider />

      <div ref={refs.about}>
        {visibleComponents.about && (
          <Suspense fallback={null}>
            <HomeAbout />
          </Suspense>
        )}
      </div>

      <div ref={refs.service}>
        {visibleComponents.service && (
          <Suspense fallback={null}>
            <HomeService />
          </Suspense>
        )}
      </div>

      <div ref={refs.gallery}>
        {visibleComponents.gallery && (
          <Suspense fallback={null}>
            <HomeGallery />
          </Suspense>
        )}
      </div>

      <div ref={refs.experience}>
        {visibleComponents.experience && (
          <Suspense fallback={null}>
            <HomeExperience />
          </Suspense>
        )}
      </div>

      <div ref={refs.testimonial}>
        {visibleComponents.testimonial && (
          <Suspense fallback={null}>
            <HomeTestimonial />
          </Suspense>
        )}
      </div>

      <ScrollToTop />
    </>
  );
};
