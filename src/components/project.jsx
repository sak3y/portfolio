// Project component
const Project = ({ title, description, href }) => {
  return (
    <div className="project">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <a href={href} className="view" target="_blank" rel="noopener noreferrer" title="View Fintrack website">
        View <span>&rsaquo;</span>
      </a>
    </div>
  );
};

export default Project;