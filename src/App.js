import Header from './components/Header';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import navLinks from './data/navLinks';
import skills from './data/skills';
import portrait from './img/portrait.jpg';
import React from 'react';

function App() {
  const aboutMeBodyText = `I am a recent Nucamp Full Stack Web + Mobile Development
                bootcamp graduate with over 8 years of professional experience
                as a former Systems Administrator, Network Engineer, and Wi-Fi
                surveyor and designer.`;

  return (
    <div className="container-fluid">
      <Header heroBody={`I'm a full-stack web developer.`} />
      <NavBar navData={navLinks} />
      <AboutMe
        imageSrc={portrait}
        title={
          <>
            A<span className="underline">BOUT</span> ME
          </>
        }
        bodyText={aboutMeBodyText}
      />
      <Skills skillsData={skills}/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
