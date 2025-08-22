import "./App.scss";
import avatar from "/images/avatar.png";
import SlideUp, { SlideUpInitial } from "./components/animations";
import UpdateScroll from "./components/updateScroll";
import Navigation from "./components/navigation";
import Experience from "./components/experience";
import Project from "./components/project";
import Footer from "./components/footer";

// ---- Main Function ----
export default function App() {
  UpdateScroll();

  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <section id="hero-section">
          <SlideUpInitial>
            <img src={avatar} alt="Profile" />
          </SlideUpInitial>
          <SlideUpInitial delay={0.2}>
            <h1>
              Hey, I'm Sheikh.
              <br />
              Aspiring Full-Stack Developer.
            </h1>
            <p className="paragraph">Designing software that works.</p>
          </SlideUpInitial>
          <SlideUpInitial delay={0.3}>
            <a href="#projects-section">View Projects</a>
          </SlideUpInitial>
        </section>

        <SlideUpInitial delay={0.4}>
          <section id="about-section">
            <h2>About</h2>
            <p className="paragraph">I'm a third years computer science student, born in the UK</p>
            <p className="paragraph">
              <strong>Here's the deal,</strong> I've worked on a range of projects, from
              collaborating on an e-commerce store for gluten-free products, to designing my own
              portfolio and building my own blog page.
            </p>
            <p className="paragraph">And that's just the beginning.</p>
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
        </SlideUpInitial>

        <hr />

        <section id="projects-section" className="projects">
          <SlideUp>
            <h2>Projects</h2>
          </SlideUp>
          <SlideUp>
            <Project
              title="Blog Page"
              description="A personal blog ranging from from everyday shower thoughts to general tech tips."
              href="https://sakey01.github.io/blog/"
            />
          </SlideUp>
          <SlideUp>
            <Project
              title="Tic Tac Toe"
              description="Play as either 'X' or 'O' and get three in a row to win. "
              href="https://sakey01.github.io/tic-tac-toe/"
            />
          </SlideUp>
          <SlideUp>
            <Project
              title="Github Profile Viewer"
              description="A website that uses Github's native API to view profiles."
              href="https://sakey01.github.io/githhub-api/"
            />
          </SlideUp>
          <SlideUp>
            <Project
              title="Gluten Free Destiny"
              description="A team based that replicates an e-commerce store that sells gluten free products"
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
              <Experience title="Virtual Intern" company="Bright Network" dateFrom="July 2025" />
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

        <Footer />
      </main>
    </>
  );
}
