import React from 'react';
import ProjectDetailsModal from './ProjectDetailsModal';

export default function Project(props) {
  const {
    id,
    targetId,
    modalName,
    image,
    alt,
    title,
    github,
    hosted,
    technology,
    details,
  } = props; 

  return (
    <div id={targetId} className="row mt-4 justify-content-center">
      <div className="col-sm-12 col-md-4 mb-4">
        <img
          className="img-fluid projectsThumbNail"
          src={image}
          alt={alt}
          data-bs-toggle="modal"
          data-bs-target={`#${modalName}`}
        />
      </div>
      <ProjectDetailsModal
        modalName={modalName}
        title={title}
        image={image}
        alt={alt}
        github={github}
        hosted={hosted}
        technology={technology}
        details={details}
      />
    </div>
  );
}
