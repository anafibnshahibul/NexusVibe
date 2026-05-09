import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scrolling to the top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // This makes it glide instead of jumping
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;