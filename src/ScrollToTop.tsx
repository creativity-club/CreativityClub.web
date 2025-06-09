import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Scroll smoothly to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Scroll smoothly to top on full page refresh
  useEffect(() => {
    window.onload = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }, []);

  return null;
};

export default ScrollToTop;
