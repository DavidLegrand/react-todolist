import React from 'react'
import Task from './Task'
import NewTask from './NewTask'
import useArray from '../../hooks/useArray'

const ToDoList = props => {
  const list = useArray([
    { id: 1, description: 'Faire les courses', done: false },
    { id: 2, description: 'Faire le ménage', done: false },
    { id: 3, description: 'Faire à manger', done: false }
  ]);

  const setNewId = () => {
    const [lastElement] = list.value.slice(-1)
    return lastElement.id + 1;
  }

  const addTask = description => {
    list.add({ id: setNewId(), description, done: false })
  }

  const toggleDone = task => {
    list.value.map((t) => t.done = (t === task ? !t.done : t.done))
    list.setValue([...list.value])
  }

  const deleteTask = task => {
    list.removeById(task.id)
  }
  
  return (
    <>
      <h1>To Do List !</h1>
      <table style={{ width: "33%", margin: "0 auto" }}>
        <thead><tr><th>Fait ?</th><th>Tâche</th><th>Supprimer</th></tr></thead>
        <tbody>
          {list.value.map((task) => <Task
            key={task.id}
            task={task}
            toggleDone={toggleDone}
            deleteTask={deleteTask}
          />)}
          <tr><td colSpan="3">
            <NewTask addTask={addTask} />
          </td></tr>
        </tbody>
      </table>
    </>
  )
}

export default ToDoList;
