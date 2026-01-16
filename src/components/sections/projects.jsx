import SlideUp from "../components/ui/animations";
import Project from "../components/project";

import bakeryVid from "../../assets/videos/bakery-site-26.mp4";
import tetrisVid from "../../assets/videos/tetris-25.mp4";
import netflixVid from "../../assets/videos/netflix-clone-25.mp4";

const projectCard = [
  {
    title: "Bakery Site",
    description: "🧁 A bakery website developed for a local business to help exposure.",
    ghub: "https://github.com/sak3y/novelty-bakery",
    url: "https://sak3y.github.io/novelty-bakery/",
    videopath: bakeryVid,
  },
  { 
    title: "Tetris",
    description: "A Tetris tutorial project with my own personal touch.",
    ghub: "https://github.com/sak3y/tetris",
    url: "https://sak3y.github.io/tetris/",
    videopath: tetrisVid,
  },
  {
    title: "Netflix Clone",
    description: "A Netflix clone, built with React, TypeScript and Tailwind 🍿",
    ghub: "https://github.com/sak3y/netflix-clone",
    url: "https://netflx-sheikh-ahm.netlify.app/",
    videopath: netflixVid,
  },
];

const Projects = () => {
  return (
    <section id="projects-section" className="projects">
      <SlideUp>
        <h2 style={{ textAlign: "center", marginBottom: "6rem" }}>Projects</h2>
      </SlideUp>

      {projectCard.map((proj) => (
        <SlideUp key={proj.title}>
          <Project
            title={proj.title}
            description={proj.description}
            url={proj.url}
            ghub={proj.ghub}
            videopath={proj.videopath}
          ></Project>
        </SlideUp>
      ))}
    </section>
  );
};

export default Projects;
