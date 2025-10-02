import Link from "./navItem";
import { SlideIn } from "./animations";
import ThemeToggle from "./toggleTheme";

const MobileMenu = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="nav-mobile">
      <SlideIn delay={0.1}>
        <Link
          icon="fab fa-github"
          className="mobile-icon"
          title="GitHub"
          href="https://github.com/sakey01"
          target="_blank"
          label="Github"
        />
      </SlideIn>
      <SlideIn delay={0.2}>
        <Link
          icon="fab fa-linkedin"
          className="mobile-icon"
          title="LinkedIn"
          href="https://linkedin.com/in/sheikh-rayhan-ahmed"
          target="_blank"
          label="LinkedIn"
        />
      </SlideIn>
      <SlideIn>
        <Link
          icon="fas fa-file-alt"
          title="Blog"
          href="https://sakey01.github.io/blog"
          className="mobile-icon"
          target="_blank"
          label="Blog"
        />
      </SlideIn>
      <SlideIn delay={0.3}>
        <ThemeToggle title="Dark Mode" className="mobile-icon" />
      </SlideIn>
    </div>
  );
};

export default MobileMenu;
