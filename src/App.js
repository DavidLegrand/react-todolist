import './App.css';
import { Row, Col, Container } from 'react-bootstrap'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserIdProvider } from './context';
import ToDoList from './components/ToDoList';
import NavMenu from './components/NavMenu';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <NavMenu />
      <Container>
        <Row>
          <Col>
            <UserIdProvider>
              <Routes />
            </UserIdProvider>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
