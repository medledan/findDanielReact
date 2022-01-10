import './skills.css';
import React from 'react';
import htmlLogo from '../img/html5+icon.svg';
import cssLogo from '../img/icons+css.svg';
import javaScriptLogo from '../img/icons+javascript.svg';
import reactLogo from '../img/react+icon.svg';

export default function Skills() {
  return (
    <section id="skills" className="skillsSection py-4">
      <h2 className="text-center">
        S<span className="underline">KILL</span>S
      </h2>
      <div className="row py-4">
        <div className="py-2 col-md-3 text-center col-sm-6">
          <img className="imgLogo" src={htmlLogo} alt="HTML Logo" />
          <h2 className="mt-2">STRUCTURE</h2>
        </div>
        <div className="py-2 col-md-3 text-center">
          <img className="imgLogo" src={cssLogo} alt="CSS Logo" />
          <h2 className="mt-2">STYLE</h2>
        </div>
        <div className="py-2 col-md-3 text-center col-sm-6">
          <img className="imgLogo" src={javaScriptLogo} alt="Javascript Logo" />
          <h2 className="mt-2">LOGIC</h2>
        </div>
        <div className="py-2 col-md-3 text-center">
          <img
            className="spinningReactLogo imgLogo"
            src={reactLogo}
            alt="React Logo"
          />
          <h2 className="mt-2">REUSABILITY</h2>
        </div>
      </div>
    </section>
  );
}
