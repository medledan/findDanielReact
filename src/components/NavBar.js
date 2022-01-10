import React from 'react';
import '../App.css';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link text-danger"
                  aria-current="page"
                  href="#header"
                >
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#skills">
                  SKILLS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#projects">
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a
                  href=""
                  className="nav-link text-light"
                  data-bs-toggle="modal"
                  data-bs-target="#contactMeForm"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
}
