import { useEffect } from "react";

// Remember scroll position
const UpdateScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    const savedPosition = sessionStorage.getItem("scrollPosition");
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default UpdateScroll;