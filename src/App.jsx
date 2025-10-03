import "./App.scss";
import UpdateScroll from "./components/updateScroll";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import About from "./components/about";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Experiences from "./components/experiences";

export default function App() {
  // Updates scorll position as user scrolls and plays animations
  UpdateScroll();

  return (
    <div className="body">
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
    </div>
  );
}
