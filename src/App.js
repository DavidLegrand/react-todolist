import './App.css';
import { Row, Col, Container } from 'react-bootstrap'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalContextProvider } from './context';
import NavMenu from './components/NavMenu';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <NavMenu />
      <Container>
        <Row>
          <Col>
            <GlobalContextProvider>
              <Routes />
            </GlobalContextProvider>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
