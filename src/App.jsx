import "./App.scss"; // Styles
import UpdateScroll from "./components/updateScroll";
import Navigation from "./components/navigation";
import Hero from "./pages/hero";
import About from "./pages/about";
import Projects from "./pages/projects";
import Experiences from "./pages/experiences";
import Footer from "./components/footer";

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
