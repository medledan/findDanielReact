import React from 'react';

export default function ProjectToggler() {
  return (
    <div className="row">
      <div className="col text-center mt-4">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            data-bs-target="#HTML_CSS"
            data-bs-toggle="collapse"
            type="button"
            className="btn btn-outline-light"
          >
            HTML/CSS
          </button>
          <button
            data-bs-target="#React"
            data-bs-toggle="collapse"
            type="button"
            className="btn btn-outline-light"
          >
            REACT
          </button>
          <button
            data-bs-target="#Node"
            data-bs-toggle="collapse"
            type="button"
            className="btn btn-outline-light"
          >
            NODE
          </button>
        </div>
      </div>
    </div>
  );
}
