import SlideUp from "./animations";
import Project from "./project";

const Projects = () => {
  const projectCard = [
    {
      title: "Blog Page",
      description:
        "A personal blog ranging from from everyday shower thoughts to general tech tips.",
      ghub: "https://github.com/sak3y/blog",
      url: "https://sak3y.github.io/blog/",
      videopath: "",
    },
    {
      title: "Tetris",
      description: "A Tetris tutorial to get an introduction into game development.",
      ghub: "https://github.com/sak3y/tetris",
      url: "https://sak3y.github.io/tetris/",
      videopath: "",
    },
    {
      title: "Netflix Clone",
      description: "A Netflix clone, built with React, TypeScript and Tailwind 🍿",
      ghub: "https://github.com/sak3y/netflix-clone",
      url: "https://netflx-sheikh-ahm.netlify.app/",
      videopath: "/videos/nflixclone25.mp4",
    },
    {
      title: "Notes App",
      description: "Lets you take your notes and convert it to markdown.",
      ghub: "https://github.com/sak3y/notes-app",
      url: "https://sak3y.github.io/notes-app/",
      videopath: "/videos/notesapp25.mp4",
    },
  ];

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
