import Header from './components/Header';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <body className="container-fluid">
      <Header />
      <NavBar />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </body>
  );
}

export default App;
