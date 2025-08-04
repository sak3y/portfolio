import Link from "./link";
import { SlideIn } from "./animations";
import ThemeToggle from "./themeToggle";

// Mobile menu
const MobileMenu = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="nav-mobile">
      <SlideIn delay={0.1}>
        <Link
          icon="fab fa-github"
          title="GitHub"
          href="https://github.com/sakey01"
          target="_blank"
          label="Github"
        />
      </SlideIn>
      <SlideIn delay={0.2}>
        <Link
          icon="fab fa-linkedin"
          title="LinkedIn"
          href="https://linkedin.com/in/sheikh-rayhan-ahmed"
          target="_blank"
          label="LinkedIn"
        />
      </SlideIn>
      <SlideIn delay={0.3}>
        <ThemeToggle title="Dark Mode" />
      </SlideIn>
    </div>
  );
};

export default MobileMenu;
