import React from 'react';
import './aboutMe.css';
import LargeButton from './LargeButton';

export default function AboutMe(props) {
  const { imageSrc, title, bodyText } = props;

  return (
    <section id="about">
      <div className="card py-5 aboutSection">
        <div className="row">
          <div className="col-md-4 text-center">
            <img className="imgPortrait" src={imageSrc} alt="Self Portrait" />
          </div>
          <div className="col-md-8">
            <div className="card-body text-center text-md-start">
              <h2 className="card-title">{title}</h2>
              <p className="card-text">{bodyText}</p>
              <div className="row">
                <div
                  className="
                      col
                      d-flex
                      justify-content-center justify-content-md-start
                    "
                >
                  <LargeButton
                    btnText="View Resume"
                    bootStrapBtnStyle="btn-outline-light"
                    hrefTarget=""
                    btnSize="btn-lg"
                    btnMargin="mt-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
