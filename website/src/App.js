import React from 'react';
import ToDoList from './components/todolist/ToDoList'
import Compteur from './components/Compteur'
import './App.css';

function App() {

  return <div className="App">
    <Compteur />
    <ToDoList />
  </div>
}

export default App;
