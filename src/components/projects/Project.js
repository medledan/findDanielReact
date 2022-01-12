import React from 'react';
import ProjectDetailsModal from './ProjectDetailsModal';

export default function Project(props) {
  const { id, image, alt } = props;

  return (
    <div id={id} className="row mt-4 justify-content-center">
      <div className="col-sm-12 col-md-4 mb-4">
        <img
          className="img-fluid projectsThumbNail"
          src={image}
          alt={alt}
          data-bs-toggle="modal"
          data-bs-target="#projectDetailsModal"
        />
        <ProjectDetailsModal />
      </div>
    </div>
  );
}
