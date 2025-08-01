import "./App.scss";
import avatar from "/images/avatar.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

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

// Link component
const Link = ({ id, title, icon, href, label, target, className, as = "a", onClick }) => {
  const classes = `${id} ${className} nav-item icon`;

  if (as === "button") {
    return (
      <button className={classes} aria-label={label} onClick={onClick}>
        <i className={icon}></i>
        <span> {title}</span>
      </button>
    );
  }

  return (
    <a href={href} className={classes} target={target} aria-label={label}>
      <i className={icon}></i>
      <span> {title}</span>
    </a>
  );
};

// Project component
const Project = ({ title, description, href }) => {
  return (
    <div className="project">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <a href={href} target="_blank" rel="noopener noreferrer" title="View Fintrack website">
        View <span>&rsaquo;</span>
      </a>
    </div>
  );
};

// Experience components
const Experience = ({ title, company, dateFrom, dateTo }) => {
  return (
    <div className="experience">
      <h3>
        {title} {company ? ` @ ${company}` : ""}
      </h3>
      <time dateTime={dateFrom}>{dateFrom}</time>
      {dateFrom && dateTo ? " - " : ""} <time dateTime={dateTo}>{dateTo}</time>
    </div>
  );
};


// Form action
function Form() {
  const [state, handleSubmit] = useForm("meozlqye");
  if (state.succeeded) {
    return <p>Submitted</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <input id="name" type="name" name="name" placeholder="Enter name" required />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <input id="email" type="email" name="email" placeholder="Enter email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <textarea id="message" name="message" placeholder=" Message" required />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button id="submit" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

// Light/dark toggle
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

// Slide in animation
const SlideIn = ({ children, delay }) => {
  return (
    <motion.div
      className="spring"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, delay: delay || 0.3, type: "spring" }}
    >
      {children}
    </motion.div>
  );
};

// Mobile + desktop menu
let menuButton = "≡";

const MobileMenu = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="nav-mobile">
      <SlideIn delay={0.1}>
        <Link
          icon="fab fa-github"
          title="GitHub"
          className="nav-item-mobile"
          href="https://github.com/sakey01"
          target="_blank"
          label="Github"
        />
      </SlideIn>
      <SlideIn delay={0.2}>
        <Link
          icon="fab fa-linkedin"
          title="LinkedIn"
          className="nav-item-mobile"
          href="https://linkedin.com/in/sheikh-rayhan-ahmed"
          target="_blank"
          label="LinkedIn"
        />
      </SlideIn>
      <SlideIn delay={0.3}>
        <ThemeToggle title="Dark Mode" className="nav-item-mobile" />
      </SlideIn>
    </div>
  );
};

const Menu = ({ toggleMenu }) => {
  return (
    <button
      className={"menu-button nav-item icon hide"}
      onClick={toggleMenu}
      style={{ fontSize: "1.8rem" }}
    >
      {menuButton}
    </button>
  );
};

// slide up animation
const SlideUp = ({ children, delay }) => {
  return (
    <motion.div
      className="spring"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, delay: delay || 0.1, type: "spring" }}
    >
      {children}
    </motion.div>
  );
};

// Default function
export default function App() {
  UpdateScroll();

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    isOpen ? (menuButton = "≡") : (menuButton = "×");
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header>
        <nav>
          <div className="nav-group">
            <Link id="home-button" icon="fa fa-home" href="#" label="home" />
            <Link
              icon="fab fa-github"
              href="https://github.com/sakey01"
              className="show"
              target="_blank"
              label="Github"
            />
            <Link
              icon="fab fa-linkedin"
              href="https://linkedin.com/in/sheikh-rayhan-ahmed"
              className="show"
              target="_blank"
              label="LinkedIn"
            />

            <ThemeToggle className="show" />

            <Menu toggleMenu={toggleMenu} />
          </div>

          <hr className="hide nav-menu-border" />

          <MobileMenu isOpen={isOpen} />
        </nav>
      </header>
      <main>
        <section id="hero-section">
          <SlideUp>
            <img src={avatar} alt="Profile" />
          </SlideUp>
          <SlideUp delay={0.2}>
            <h1>
              Hey, I'm Sheikh.
              <br />
              Aspiring Full-Stack Developer.
            </h1>
            <p className="paragraph">Here to design software that works</p>
          </SlideUp>
          <SlideUp delay={0.3}>
            <a href="#projects-section">View Projects</a>
          </SlideUp>
        </section>
        <SlideUp delay={0.4}>
          <section id="about-section">
            <h2>About</h2>
            <p className="paragraph">I'm a third years computer science student, born in the UK</p>
            <p className="paragraph">
              <strong>Here's the deal,</strong> I've worked on a range of projects, from
              collaborating on an e-commerce store for gluten-free products, to designing my own
              portfolio and building a budgeting app. And that's just the beginning.
            </p>
            <p className="paragraph">
              I'm here because I like building and want to solve real problems.
            </p>
            <p className="paragraph">Two birds, one stone.</p>
            <p className="paragraph">
              When I'm not coding, I'm either working out, climbing rocks or hanging out with
              friends.
            </p>
            <p className="paragraph" style={{ textDecoration: "line-through" }}>
              But you'll probably just find me binging the latest show on Netflix.
            </p>
            <p className="paragraph">
              P.S: I'm also active on
              <a target="_blank" href="https://github.com/sakey01">
                {" "}
                <span className="clicked-link">Github.</span>
              </a>
            </p>
          </section>
        </SlideUp>

        <hr />

        <section id="projects-section" className="projects">
          <SlideUp>
            <h2>Projects</h2>
          </SlideUp>
          <SlideUp>
            <Project
              title="Fintrack"
              description="A budgeting app (in progress)."
              href="https://fintrack-home.vercel.app"
            />
          </SlideUp>
          <SlideUp>
            <Project
              title="Whack-a-mole"
              description="Hit the mole to score a point."
              href="https://sakey01.github.io/whack-a-mole/"
            />
          </SlideUp>
          <SlideUp>
            <Project
              title="Github Viewer"
              description="A website that uses an API to view Github profiles."
              href="https://sakey01.github.io/githhub-api/"
            />
          </SlideUp>
          <SlideUp>
            <Project
              title="Gluten Free Destiny"
              description="A team based e-commerce store for people with gluten allergies."
              href="https://glutenfreedestiny.free.nf"
            />
          </SlideUp>
        </section>

        <hr />

        <section id="education-section">
          <SlideUp>
            <h2>Experiences</h2>
          </SlideUp>
          <div className="experiences">
            <SlideUp>
              <Experience title="Web Developer" company="" dateFrom="June 2025" dateTo="Present" />
            </SlideUp>
            <SlideUp>
              <Experience
                title="Virtual Intern"
                company="Bright Network"
                dateFrom="July 2025"
                dateTo=""
              />
            </SlideUp>
            <SlideUp>
              <Experience
                title="Sales Representative "
                company="Antzara Organisation"
                dateFrom="June 2024"
                dateTo="September 2024"
              />
            </SlideUp>
          </div>
        </section>

        <hr />

        <footer>
          <SlideUp>
            <h2>Get in Touch</h2>
            <p className="paragraph">
              Whether you're looking to say hello or hire some real talent. Feel free to send me a
              message and I'll get back to you as soon as I can.
            </p>
            <Form />
          </SlideUp>

          <hr />

          <div className="copywrite">Copywrite © 2025 Sheikh Ahmed. All rights reserved.</div>
        </footer>
      </main>
    </>
  );
}
