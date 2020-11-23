import './App.css';
import { Row, Col, Container } from 'react-bootstrap'
import ToDoList from './components/ToDoList';
import { UserIdProvider } from './context';
function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserIdProvider>
            <ToDoList />
          </UserIdProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
