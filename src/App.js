import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <body>
          <Header />
          <NavBar />
        </body>
      </Container>
    </div>
  );
}

export default App;
