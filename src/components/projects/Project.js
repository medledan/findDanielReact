import React from 'react';
import ProjectDetailsModal from './ProjectDetailsModal';

export default function Project(props) {
  const { targetId, image, alt, title, github, hosted, technology, details } =
    props.data;

  return (
    <div id={targetId} className="row mt-4 justify-content-center">
      <div className="col-sm-12 col-md-4 mb-4">
        <img
          className="img-fluid projectsThumbNail"
          src={image}
          alt={alt}
          data-bs-toggle="modal"
          data-bs-target="#projectDetailsModal"
        />
        <ProjectDetailsModal
          title={title}
          image={image}
          alt={alt}
          github={github}
          hosted={hosted}
          technology={technology}
          details={details}
        />
      </div>
    </div>
  );
}
