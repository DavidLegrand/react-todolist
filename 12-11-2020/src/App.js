import './App.css';
import ToDoList from './components/ToDoList';
import Counter from './components/Counter';
import { UserIdProvider } from './contexts'
import Login from './components/Login';

function App() {


  return (
    <div className="App">
      <Counter />
      <Login />
      <UserIdProvider>
        <ToDoList />
      </UserIdProvider>

    </div>
  );
}

export default App;
