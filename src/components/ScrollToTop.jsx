import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Scroll to hash target if present
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return; // Exit early to prevent scrolling to top
      }
    }
    // Otherwise, scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null; // This component does not render anything
};

export default ScrollToTop;