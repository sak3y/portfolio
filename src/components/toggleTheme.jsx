import { useState, useEffect } from "react";

// Light/dark theme toggle
function ThemeToggle({ className, title }) {
  const [theme, setTheme] = useState(() => sessionStorage.getItem("currTheme") || "light");

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    sessionStorage.setItem("currTheme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button className={`icon ${className}`} aria-label="Dark mode toggle" onClick={toggleTheme}>
      <i className="fa fa-moon"></i>
      <span>{title}</span>
    </button>
  );
}

export default ThemeToggle;