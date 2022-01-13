import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import AboutMe from './components/aboutME/AboutMe';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
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
      <NavBar />
      <AboutMe
        imageSrc={portrait}
        title={
          <>
            A<span className="underline">BOUT</span> ME
          </>
        }
        bodyText={aboutMeBodyText}
      />
      <Skills />
      <Projects />
      <Contact sectionText={'BACK TO TOP'} />
      <Footer name={'Daniel Medley'} />
    </div>
  );
}

export default App;
