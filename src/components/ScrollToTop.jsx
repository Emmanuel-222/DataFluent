import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top whenever the pathname changes
  }, [pathname]);

  return null; // No UI rendering, just functionality
}

export default ScrollToTop;