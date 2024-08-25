import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    const { hash } = location;

    const removeHash = (str) => {
      const result = str.slice(1);
      return result;
    };

    if (hash) {
      const element = document.getElementById(removeHash(hash));

      if (element) {
        const targetPosition =
          element.offsetTop -
          60; /* You can increase or decrease the number based on your need*/
        element.scrollIntoView({
          behavior: "smooth",
          inline: "nearest",
          block: "start",
        });
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHashElement;
