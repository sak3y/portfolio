import Link from "../navItem";
import { SlideIn } from "../ui/animations";
import ThemeToggle from "../ui/toggleTheme";

const MobileMenu = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="nav-mobile">
      <SlideIn delay={0.1}>
        <Link
          icon="fab fa-github"
          className="mobile-icon"
          title="GitHub"
          href="https://github.com/sak3y"
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
          href="https://sak3y1.github.io/blog"
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
