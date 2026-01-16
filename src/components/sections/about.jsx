import { SlideUpInitial } from "../ui/animations";

const About = () => {
  return (
    <SlideUpInitial delay={0.4}>
      <section id="about-section">
        <h2>About</h2>
        <p className="paragraph">I'm a third-year computer science student, raised in the UK</p>
        <p className="paragraph">
          <strong>Here's the deal,</strong> I've worked on a range of projects, from collaborating
          on an e-commerce store for gluten-free products, to designing my own portfolio website to
          building my own chrome-extension.
        </p>
        <p className="paragraph">And that's just the start.</p>
        <p className="paragraph">
          I'm here because I like building and want to solve real problems.
        </p>
        <p className="paragraph">Two birds, one stone.</p>
        <p className="paragraph">
          When I'm not coding, I'm either working out, rock climbing, or hanging out with friends.
        </p>
        <p className="paragraph" style={{ textDecoration: "line-through" }}>
          But you'll probably just find me binging the latest show on Netflix.
        </p>
        <p className="paragraph">
          P.S: I'm also active on{" "}
          <a target="_blank" href="https://github.com/sak3y">
            <span className="visited-link">Github.</span>
          </a>
        </p>
      </section>
    </SlideUpInitial>
  );
};

export default About;
