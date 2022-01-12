import React from 'react';
import './projectDetailsModal.css';
import testImage from '../../img/portrait.jpg';

export default function ProjectDetailsModal() {
  return (
    <section
      className="modal fade"
      id="projectDetailsModal"
      tabIndex="-1"
      aria-labelledby="contactMeModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered ">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="projectDetailsModal">
              PROJECT NAME
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div id="projectDetailsCard" className="card">
              <img src={testImage} class="card-img-top" alt="..." />
              <ul className="list-group list-group-mine list-group-flush">
                <li className="list-group-item card-body-list">Technology: </li>
                <li className="list-group-item card-body-list">Details: </li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">
                  Live Project
                </a>
                <a href="#" className="card-link">
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-lg btn-outline-light mr-4"
              data-bs-dismiss="modal"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
