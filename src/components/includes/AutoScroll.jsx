import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AutoScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // optional for smooth animation
    });
  }, [pathname]);

  return null;
};

export default AutoScroll;
