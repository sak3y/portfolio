import { SlideUpInitial } from "../ui/animations";

const About = () => {
  return (
    <SlideUpInitial delay={0.4}>
      <section id="about-section">
        <h2>About</h2>
        <p className="paragraph">I'm a CS graduate, born and raised in London.</p>
        <p className="paragraph">
          Here's the deal, I've worked on a range of projects, from engineering a tutoring website
          that handles payments, booking and auth to building a website for a local bakery of mine.
        </p>
        <p className="paragraph">That's just the start.</p>
        <p className="paragraph">
          I'm here because I like solving problems for others and developing is a part of that.
        </p>
        <p className="paragraph">
          When I'm not coding, I'm either working out, rock climbing, or hanging out with friends.
        </p>
        <p className="paragraph" style={{ textDecoration: "line-through" }}>
          But you'll probably just find me binging Breaking Bad.
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
