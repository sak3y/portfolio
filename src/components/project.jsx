import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Project = ({ title, description, ghub, url, videopath }) => {
  return (
    <div className="project">
      <div className="aside">
        <div className="content">
          <div className="header">
            <h3>{title}</h3>
            <a href={url} target="_blank" className="project-icon" title={`${title} Website Link`}>
              <FaExternalLinkAlt />
            </a>
            <a href={ghub} target="_blank" className="project-icon" title={`${title} GitHub Link`}>
              <FaGithub />
            </a>
          </div>
          <p>{description}</p>
        </div>
      </div>

      <div className="video-container">
        <video loop autoPlay controls muted src={videopath} typeof="video/mp4" width={300} />
      </div>
    </div>
  );
};

export default Project;
