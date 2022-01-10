import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <body>
          <Header />
          <NavBar />
          <AboutMe/>
          <Skills/>
        </body>
      </Container>
    </div>
  );
}

export default App;
