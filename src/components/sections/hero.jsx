import { SlideUpInitial } from "../components/animations";
import avatar from "/src/assets/avatar.png";

const Hero = () => { 
  return (
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
  );
};

export default Hero;
