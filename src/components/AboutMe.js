import React from 'react';
import './aboutMe.css';
import portrait from '../img/portrait.jpg';

export default function AboutMe() {
  return (
    <section id="about">
      <div className="card py-5 aboutSection">
        <div className="row">
          <div className="col-md-4 text-center">
            <img className="imgPortrait" src={portrait} alt="Self Portrait" />
          </div>
          <div className="col-md-8">
            <div className="card-body text-center text-md-start">
              <h2 className="card-title">
                A<span className="underlined">BOUT</span> ME
              </h2>
              <p className="card-text">
                I am a recent Nucamp Full Stack Web + Mobile Development
                bootcamp graduate with over 8 years of professional experience
                as a former Systems Administrator, Network Engineer, and Wi-Fi
                surveyor and designer.
              </p>
              <div className="row">
                <div
                  className="
                      col
                      d-flex
                      justify-content-center justify-content-md-start
                    "
                >
                  <button
                    type="button"
                    className="btn btn-lg btn-outline-light"
                  >
                    View Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
