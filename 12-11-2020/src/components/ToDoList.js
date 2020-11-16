import React, { useState, useContext } from 'react'
import { useFetch } from '../hooks'
import NewTask from './NewTask';
import Task from './Task';
import Title from './Title';
import { UserIdContext } from '../contexts'


const ToDoList = () => {
  const [list, setlist] = useState([])
  const [userid, setuserid] = useContext(UserIdContext)
  const endpoint = `https://jsonplaceholder.typicode.com/todos?userId=${userid}`
  useFetch(endpoint, setlist)

  const getCompleted = (status) => {
    return status ? "Terminée" : "En cours"
  }

  const handleCompleted = (task) => {
    task.completed = !task.completed
    const newlist = list.map(t => t.id === task.id ? task : t)
    setlist(newlist);
  }

  const handleNewTask = (task) => {
    const lastId = list.reduce((prev, curr) => prev.id > curr.id ? prev : curr).id
    setlist([...list, { id: lastId + 1, ...task }])
  }

  return (
    <>
      <Title>To Do List</Title>
      <label>User Id : <input type="number" value={userid} onChange={(e) => setuserid(e.target.value)} /></label>
      <ul>
        {list.map(task => <Task key={task.id} task={task} completed={getCompleted} onchange={handleCompleted} />)}
      </ul>
      <NewTask addtask={handleNewTask} />
    </>
  )
}

export default ToDoList
