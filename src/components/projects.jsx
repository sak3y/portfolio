import SlideUp from "./animations";
import Project from "./project";

const Projects = () => {
  return (
    <section id="projects-section" className="projects">
      <SlideUp>
        <h2>Projects</h2>
      </SlideUp>
      <SlideUp>
        <Project
          title="Blog Page"
          description="A personal blog ranging from from everyday shower thoughts to general tech tips."
          href="https://sak3y.github.io/blog/"
        />
      </SlideUp>
      <SlideUp>
        <Project
          title="Tic Tac Toe"
          description="Play as either 'X' or 'O' and get three in a row to win. "
          href="https://sak3y.github.io/tic-tac-toe/"
        />
      </SlideUp>
      <SlideUp>
        <Project
          title="Github Profile Viewer"
          description="A website that uses Github's native API to view profiles."
          href="https://sak3y.github.io/githhub-profile-viewer/"
        />
      </SlideUp>
      <SlideUp>
        <Project
          title="Gluten Free Destiny"
          description="A team based that replicates an e-commerce store that sells gluten free products"
          href="https://glutenfreedestiny.free.nf"
        />
      </SlideUp>
    </section>
  );
};

export default Projects;
