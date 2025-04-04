import React, { useState, useRef, useEffect } from 'react';
import { HomeSlider } from "./components/HomeSlider";
import { HomeAbout } from "./components/HomeAbout";
import { HomeService } from "./components/HomeService";
import { HomeTestimonial } from "./components/HomeTetimonial";
import HomeGallery from "./components/HomeGallery";
import { ScrollToTop } from "../../components/ScrollToTop";
import HomeExperience from "./components/HomeExperience";

export const Home = () => {
  const [visibleComponents, setVisibleComponents] = useState({
    slider: true, // Load first component immediately
    about: false,
    service: false,
    gallery: false,
    experience: false,
    testimonial: false
  });

  const refs = {
    about: useRef(null),
    service: useRef(null),
    gallery: useRef(null),
    experience: useRef(null),
    testimonial: useRef(null)
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const componentName = entry.target.getAttribute('data-component');
            setVisibleComponents(prev => ({
              ...prev,
              [componentName]: true
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -200px 0px',
        threshold: 0
      }
    );
  
    Object.entries(refs).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.setAttribute('data-component', key);
        observer.observe(ref.current);
      }
    });
  
    return () => {
      Object.values(refs).forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);
  

  return (
    <>
      <HomeSlider />
      
      <div ref={refs.about}>
        {visibleComponents.about && <HomeAbout />}
      </div>
      
      <div ref={refs.service}>
        {visibleComponents.service && <HomeService />}
      </div>
      
      <div ref={refs.gallery}>
        {visibleComponents.gallery && <HomeGallery />}
      </div>
      
      <div ref={refs.experience}>
        {visibleComponents.experience && <HomeExperience />}
      </div>
      
      <div ref={refs.testimonial}>
        {visibleComponents.testimonial && <HomeTestimonial />}
      </div>
      
      <ScrollToTop />
    </>
  );
};