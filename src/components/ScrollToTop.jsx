import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scroll position is greater than 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`btn btn-primary rounded-circle position-fixed p-3 shadow-lg ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        bottom: "30px",
        right: "30px",
        zIndex: 9999,
        transition: "opacity 0.3s ease",
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
      }}
    >
      <FaArrowUp size={20} />
    </button>
  );
};
