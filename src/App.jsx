import "./App.scss";
import UpdateScroll from "./components/hooks/useScroll";
import Navigation from "./components/layout/navigation";
import Footer from "./components/layout/footer";
import About from "./components/sections/about";
import Hero from "./components/sections//hero";
import Projects from "./components/sections/projects";
import Experiences from "./components/sections/experiences";

export default function App() {
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
