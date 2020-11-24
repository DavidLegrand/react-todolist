import './App.css';
import { Row, Col, Container } from 'react-bootstrap'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalContextProvider } from './context';
import NavMenu from './components/NavMenu';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <GlobalContextProvider>
        <NavMenu />
        <Container>
          <Row>
            <Col>
              <Routes />
            </Col>
          </Row>
        </Container>
      </GlobalContextProvider>
    </Router>
  );
}

export default App;
