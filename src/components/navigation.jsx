import NavItem from "./navItem";
import ThemeToggle from "./themeToggle";
import MobileMenu from "./mobileMenu";
import { useState } from "react";

const Menu = ({ isOpen, toggleMenu }) => {
  const menuButton = isOpen ? "×" : "≡";

  return (
    <button className={"icon hide"} onClick={toggleMenu} style={{ fontSize: "2rem" }}>
      {menuButton}
    </button>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="nav-group">
        <NavItem id="home-button" icon="fa fa-home" href="#" label="home" />
        <NavItem
          icon="fab fa-github"
          href="https://github.com/sakey01"
          className="show"
          target="_blank"
          label="Github"
        />
        <NavItem
          icon="fab fa-linkedin"
          href="https://linkedin.com/in/sheikh-rayhan-ahmed"
          className="show"
          target="_blank"
          label="LinkedIn"
        />

        <ThemeToggle className="show" />

        <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>

      <hr className="hide nav-menu-border" />

      <MobileMenu isOpen={isOpen} />
    </nav>
  );
};

export default Navigation;
