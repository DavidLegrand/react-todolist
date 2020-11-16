import './App.css';
import { Row, Col, Container } from 'react-bootstrap'
import ToDoList from './components/ToDoList';
function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-3 text-center">To Do List</h1>
          <ToDoList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
