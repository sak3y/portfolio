import "./App.scss";

export default function App() {
  return (
    <>
      <header>
        <nav>
          <ul className="nav-group">
            <li className="home-button nav-item">
              <a href="#" className="icon">
                <i className="fa fa-home"></i>
              </a>
            </li>
            <a
              className="icon nav-item"
              href="https://github.com/sakey01"
              target="_blank"
              aria-label="GitHub"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              className="icon nav-item"
              href="https://linkedin.com/in/sheikh-rayhan-ahmed"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin"></i>
            </a>

            <li className="dark-mode-button nav-item">
              <button className="dark-mode-icon icon" onClick={toggleDark}>
                <i className="fa fa-moon"></i>
              </button>
            </li>
            <li className="menu-button nav-item">
              <button className="menu-icon icon" onClick={openMenu}>
                &#9776;
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="hero-section">
          <img src="public/images/avatar.png" />
          <h1>
            Hey, I'm Sheikh.
            <br />
            Aspiring Full-Stack Developer.
          </h1>
          <p className="paragraph">Here to design sotware thats works and lasts</p>
          <a href="#projects-section">View Projects</a>
        </section>

        <section id="about-section">
          <h2>About</h2>
          <p className="paragraph">I'm a third years computer science student, born in the UK</p>
          <p className="paragraph">
            <strong>Here's the deal,</strong> I've worked on a range of projects, from collaborating
            on an e-commerce store for gluten-free products with a team, to designing my own
            portfolio and building a budgeting app. And that's just the beginning.
          </p>
          <p className="paragraph">
            I'm here because I like to build and also want to solve real problems.
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
              <span
                style={{
                  textDecoration: "underline",
                  color: "rgba(197, 0, 197, 1)",
                }}
              >
                Github.
              </span>
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
            description="Not much to explain here."
            href="https://sakey01.github.io/whack-a-mole/"
          />
          <Project
            title="Github API"
            description="An API that lets you view Github profiles."
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

function Project({ title, description, href }) {
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
}

function Experience({ title, company, dateFrom, dateTo }) {
  return (
    <div className="experience">
      <h3>
        {title} {company ? ` @ ${company}` : ""}
      </h3>
      <time dateTime={dateFrom}>{dateFrom}</time>
      {dateFrom && dateTo ? " - " : ""} <time dateTime={dateTo}>{dateTo}</time>
    </div>
  );
}

window.addEventListener("DOMContentLoaded", () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) {
    document.documentElement.classList.add("dark");
  }
});

function toggleDark() {
  const html = document.querySelector("html");

  html.classList.contains("dark") ? html.classList.remove("dark") : html.classList.add("dark");
}

function openMenu() {}
