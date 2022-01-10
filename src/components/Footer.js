import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer class="py-4">
      <div class="row">
        <div class="col text-center">
          <a
            class="btn btn-lg btn-primary"
            href="https://www.linkedin.com/in/danielmedleyprofile"
            target="_blank"
            role="button"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            class="btn btn-lg btn-primary githubIcon"
            href="https://github.com/medledan"
            target="_blank"
            role="button"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
      <p class="mt-4 text-center">
        <small>Daniel Medley &copy; 2021</small>
      </p>
    </footer>
  );
}
