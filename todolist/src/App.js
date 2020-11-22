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
            <h1 className="display-3 text-center">To Do List</h1>
            <ToDoList />
          </UserIdProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
