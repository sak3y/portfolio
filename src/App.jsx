import "./App.scss";
import { useState } from "react";
import avatar from "/images/avatar.png";
import SlideUp, { SlideIn } from "./components/animations";
import UpdateScroll from "./components/updateScroll";
import ThemeToggle from "./components/themeToggle";

import Menu from "./components/menu";
import MobileMenu from "./components/mobileMenu";
import Link from "./components/link";
import Experience from "./components/experience";
import Project from "./components/project";
import Form from "./components/form";\

// MAIN DEFAULT function
export default function App() {
  UpdateScroll();
  let menu

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
            <p className="paragraph">Designing software that works.</p>
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
                <span className="visited-link">Github.</span>
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
              title="Log-reader"
              description="A python script that return a list of IP addresses making the most server requests."
              href="https://github.com/sakey01/log-reader"
            />
          </SlideUp>
          <SlideUp>
            <Project
              title="Whack-a-mole"
              description="Hit the mole and score a point."
              href="https://sakey01.github.io/whack-a-mole/"
            />
          </SlideUp>
          <SlideUp>
            <Project
              title="Github Viewer"
              description="A website that uses Github's API to view profiles."
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
