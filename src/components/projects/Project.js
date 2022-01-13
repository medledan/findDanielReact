import React from 'react';
import ProjectDetailsModal from './ProjectDetailsModal';
import ProjectToggler from './ProjectToggler';

export default function Project(props) {
  const {
    targetId,
    modalName,
    image,
    alt,
    collapsed,
    title,
    github,
    hosted,
    technology,
    details,
  } = props;

  return (
    <div
      id={targetId}
      className={`col-sm-12 col-md-4 mt-4 justify-content-center ${
        collapsed && 'collapse'
      }`}
    >
      <div className="mb-4">
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
