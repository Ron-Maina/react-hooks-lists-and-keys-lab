import React from "react";

function ProjectItem({ name, about, technologies }) {
  const renderedTechnologies = technologies.map(technology => <span key={technology}>{technology}</span>)
  return (
    <div className="project-item">
      <h3 key={name}>{name}</h3>
      <p key={about}>{about}</p>
      <div className="technologies">
        {renderedTechnologies}
      </div>
    </div>
  );
}

export default ProjectItem;
