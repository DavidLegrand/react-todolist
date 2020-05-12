import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Task from './Task'
import NewTask from './NewTask'

const ToDoList = props => {
  const [list, setList] = useState([
    { id: 1, description: 'Faire les courses', done: false },
    { id: 2, description: 'Faire le ménage', done: false },
    { id: 3, description: 'Faire à manger', done: false }
  ])
  const setNewId = () => {
    const [lastElement] = list.slice(-1)
    return lastElement.id + 1;
  }

  const addTask = description => {
    const NewTask = { id: setNewId(), description, done: false }
    setList([...list, NewTask])
  }

  const toggleDone = task => {
    list.map((t) => { t.done = (t === task ? !t.done : t.done) })
    setList([...list])
  }
  const deleteTask = task => {
    const newList = list.filter((t) => t.id !== task.id)
    setList([...newList])
  }
  return (
    <>
      <h1>To Do List !</h1>
      <table style={{ width: "33%", margin: "0 auto" }}>
        <thead><tr><th>Fait ?</th><th>Tâche</th><th>Supprimer</th></tr></thead>
        <tbody>
          {list.map((task) => <Task
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

ToDoList.propTypes = {

}

export default ToDoList
