import React from 'react';
import './header.css';

export default function Header() {
  return (
    <header
      id="header"
      className="
          jumbotron
          text-center
          d-flex
          align-items-center
          justify-content-center
        "
    >
      <div className="lh-1 jumbotronContents">
        <h1 className="p-3">
          Hello, I'm <span className="text-danger">Daniel Medley</span>.<br />
          I'm a full-stack web developer.
        </h1>
        <a
          role="button"
          className="btn btn-lg btn-danger btn-outline-light mt-4"
          href="#projects"
        >
          View my work
        </a>
      </div>
    </header>
  );
}
