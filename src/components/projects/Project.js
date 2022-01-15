import React from 'react';
import ProjectDetailsModal from './ProjectDetailsModal';

export default function Project(props) {
  const {
    targetId,
    modalName,
    sitePrevImage,
    alt,
    collapsed,
    title,
    github,
    hosted,
    technology,
    details,
    modalImage,
  } = props;

  return (
    <div
      id={targetId}
      className={`col-sm-12 col-md-4 mt-4 justify-content-center${
        collapsed && 'collapse'
      }`}
    >
      <img
        className="projectImgThumbNail"
        src={sitePrevImage}
        alt={alt}
        data-bs-toggle="modal"
        data-bs-target={`#${modalName}`}
      />
      <ProjectDetailsModal
        modalName={modalName}
        title={title}
        modalImage={modalImage}
        alt={alt}
        github={github}
        hosted={hosted}
        technology={technology}
        details={details}
      />
    </div>
  );
}
