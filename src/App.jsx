import "./App.scss";
import UpdateScroll from "./components/updateScroll";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import About from "./components/about";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Experiences from "./components/experiences";

export default function App() {
  // Updates scorll position to figure out when to do the animations
  UpdateScroll();

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Hero />
        <About />
        <hr />
        <Projects />
        <hr />
        <Experiences />
        <hr />
      </main>
      <Footer />
    </>
  );
}
