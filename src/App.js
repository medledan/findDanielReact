import Header from './components/Header';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import navLinks from './data/navLinks'
import React from 'react';

function App() {
  function renderHeroHeader() {
    const name = 'Daniel Medley';
    const title = 'full-stack web developer';

    return (
      <h1 className="p-3">
        Hello, I'm <span className="text-danger">{name}</span>.<br />
        I'm a {title}.
      </h1>
    );
  }  

  return (
    <div className="container-fluid">
      <Header heroTitle={renderHeroHeader()} />
      <NavBar navData={navLinks} />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
