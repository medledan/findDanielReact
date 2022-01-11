import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="row">
        <div className="col text-center">
          <a
            className="btn btn-lg btn-primary"
            href="https://www.linkedin.com/in/danielmedleyprofile"
            target="_blank"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="btn btn-lg btn-primary githubIcon"
            href="https://github.com/medledan"
            target="_blank"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <p className="mt-4 text-center">
        <small>Daniel Medley &copy; 2021</small>
      </p>
    </footer>
  );
}
