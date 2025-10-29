import SlideUp from "../components/animations";
import Project from "../components/project";

const Projects = () => {
  const projectCard = [
    {
      title: "v2-Blog",
      description:
        "A personal blog ranging from from everyday shower thoughts to general tech tips.",
      ghub: "https://github.com/sak3y/blog",
      url: "https://sak3y.github.io/blog/",
      videopath: "/videos/v2-blog2910.mp4",
    },
    {
      title: "Briefly",
      description: "A chrome-extension tool that summarises long text ⚡",
      ghub: "https://github.com/sak3y/briefly",
      videopath: "/videos/brielfy1016.mp4",
    },
    {
      title: "Tetris",
      description: "A Tetris tutorial project with my own personal touch.",
      ghub: "https://github.com/sak3y/tetris",
      url: "https://sak3y.github.io/tetris/",
      videopath: "/videos/tetristut25.mp4",
    },
    {
      title: "Netflix Clone",
      description: "A Netflix clone, built with React, TypeScript and Tailwind 🍿",
      ghub: "https://github.com/sak3y/netflix-clone",
      url: "https://netflx-sheikh-ahm.netlify.app/",
      videopath: "/videos/nflixclone25.mp4",
    },
    {
      title: "Github Tracker",
      description: "Ever struggled to find someone on GitHub. Now all you need is there username.",
      ghub: "https://github.com/sak3y/github-profile-viewer",
      url: "https://sak3y.github.io/github-profile-viewer/",
      videopath: "/videos/github-finder2910.mp4",
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
