import React from 'react';
import './projects.css';

export default function Projects() {
  return (
    <div>
      <section id="projects" className="projectSection p-4">
        <h2 className="text-center pt-4">
          P<span className="underline">ROJECT</span>S
        </h2>

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
                data-bs-target="#ReactNative"
                data-bs-toggle="collapse"
                type="button"
                className="btn btn-outline-light"
              >
                REACT NATIVE
              </button>
            </div>
          </div>
        </div>
        <div id="HTML_CSS" className="row mt-4 justify-content-center">
          <div className="col-sm-12 col-md-4 mb-4">
            <img
              className="img-fluid projectsThumbNail"
              src="https://picsum.photos/id/123/500"
              alt="sample project"
            />
          </div>
          <div className="col-sm-12 col-md-4 mb-4">
            <img
              className="img-fluid projectsThumbNail"
              src="https://picsum.photos/id/347/500"
              alt="sample project"
            />
          </div>
          <div className="col-sm-12 col-md-4 mb-4">
            <img
              className="img-fluid projectsThumbNail"
              src="https://picsum.photos/id/378/500"
              alt="sample project"
            />
          </div>
        </div>
        <div id="React" className="row mt-4 collapse justify-content-center">
          <div className="col-sm-12 col-md-4 mb-4">
            <img
              className="img-fluid projectsThumbNail"
              src="https://picsum.photos/id/1004/500"
              alt="sample project"
            />
          </div>
          <div className="col-sm-12 col-md-4 mb-4">
            <img
              className="img-fluid projectsThumbNail"
              src="https://picsum.photos/id/1003/500"
              alt="sample project"
            />
          </div>
          <div className="col-sm-12 col-md-4 mb-4">
            <img
              className="img-fluid projectsThumbNail"
              src="https://picsum.photos/id/1008/500"
              alt="sample project"
            />
          </div>
        </div>
        <div
          id="ReactNative"
          className="row mt-4 collapse justify-content-center"
        >
          <div className="col-sm-12 col-md-4 mb-4">
            <img
              className="img-fluid projectsThumbNail"
              src="https://picsum.photos/id/1019/500"
              alt="sample project"
            />
          </div>
          <div className="col-sm-12 col-md-4 mb-4">
            <img
              className="img-fluid projectsThumbNail"
              src="https://picsum.photos/id/102/500"
              alt="sample project"
            />
          </div>
          <div className="col-sm-12 col-md-4 mb-4">
            <img
              className="img-fluid projectsThumbNail"
              src="https://picsum.photos/id/1024/500"
              alt="sample project"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
