import "./App.scss";
import avatar from "/images/avatar.png";
import { useState } from "react";

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

// Light/dark toggle
function toggleDark() {
  const html = document.querySelector("html");

  html.classList.contains("dark") ? html.classList.remove("dark") : html.classList.add("dark");
}

// Mobile + desktop menu
const MobileMenu = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="nav-mobile">
      <Link
        icon="fab fa-github"
        title="GitHub"
        className="nav-item-mobile"
        href="https://github.com/sakey01"
        target="_blank"
        label="Github"
      />
      <Link
        icon="fab fa-linkedin"
        title="LinkedIn"
        className="nav-item-mobile"
        href="https://linkedin.com/in/sheikh-rayhan-ahmed"
        target="_blank"
        label="LinkedIn"
      />
      <Link
        as="button"
        icon="fa fa-moon"
        title="Dark Mode"
        className="nav-item-mobile"
        label="Dark/light toggle"
        onClick={toggleDark}
      />
    </div>
  );
};

const menuButton = "☰";

const Menu = ({ toggleMenu }) => {
  return (
    <button className="menu-button nav-item icon hide" onClick={toggleMenu}>
      {menuButton}
    </button>
  );
};

// Default function
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

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

            <Link
              as="button"
              icon="fa fa-moon"
              className="nav-item show"
              label="Dark/light toggle"
              onClick={toggleDark}
            />
            
            <Menu toggleMenu={toggleMenu} />
          </div>

          <hr className="hide nav-menu-border" />

          <MobileMenu isOpen={isOpen} />
        </nav>
      </header>
      <main>
        <section id="hero-section">
          <img src={avatar} alt="Profile" />
          <h1>
            Hey, I'm Sheikh.
            <br />
            Aspiring Full-Stack Developer.
          </h1>
          <p className="paragraph">Here to design software that works</p>
          <a href="#projects-section">View Projects</a>
        </section>

        <section id="about-section">
          <h2>About</h2>
          <p className="paragraph">I'm a third years computer science student, born in the UK</p>
          <p className="paragraph">
            <strong>Here's the deal,</strong> I've worked on a range of projects, from collaborating
            on an e-commerce store for gluten-free products, to designing my own portfolio and
            building a budgeting app. And that's just the beginning.
          </p>
          <p className="paragraph">
            I'm here because I like building and want to solve real problems.
          </p>
          <p className="paragraph">Two birds, one stone.</p>
          <p className="paragraph">
            When I'm not coding, I'm either working out, climbing rocks or hanging out with friends.
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

        <hr />

        <section id="projects-section" className="projects">
          <h2>Projects</h2>
          <Project
            title="Fintrack"
            description="A budgeting app (in progress)."
            href="https://fintrack-home.vercel.app"
          />
          <Project
            title="Whack-a-mole"
            description="Hit the mole to score a point."
            href="https://sakey01.github.io/whack-a-mole/"
          />
          <Project
            title="Github Viewer"
            description="A website that uses an API to view Github profiles."
            href="https://sakey01.github.io/githhub-api/"
          />
          <Project
            title="Gluten Free Destiny"
            description="A team based e-commerce store for people with gluten allergies."
            href="https://glutenfreedestiny.free.nf"
          />
        </section>

        <hr />

        <section id="education-section">
          <h2>Experiences</h2>
          <div className="experiences">
            <Experience
              title="Front-end Web Developer"
              company=""
              dateFrom="June 2025"
              dateTo="Present"
            />
            <Experience
              title="Virtual Intern"
              company="Bright Network"
              dateFrom="July 2025"
              dateTo=""
            />
            <Experience
              title="Sales Representative "
              company="Antzara Organisation"
              dateFrom="June 2024"
              dateTo="September 2024"
            />
          </div>
        </section>

        <hr />

        <footer>
          <h2>Get in Touch</h2>
          <p className="paragraph">
            Whether you're looking to say hello or hire some real talent. Feel free to send me a
            message and I'll get back to you as soon as I can.
          </p>
          <form id="contact-form">
            <input type="name" placeholder="Enter name" required />
            <input type="email" placeholder="Enter email" required />
            <input type="text" placeholder=" Message" required />
            <input id="submit" type="submit" />
          </form>

          <hr />

          <div className="copywrite">Copywrite © 2025 Sheikh Ahmed. All rights reserved.</div>
        </footer>
      </main>
    </>
  );
}
