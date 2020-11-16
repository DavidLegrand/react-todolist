import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import TaskModel from '../models/task'
import Task from './Task'

const ToDoList = () => {
  const [list, setlist] = useState([
    new TaskModel(1, "Finaliser les maquettes", true),
    new TaskModel(2, "Terminer l'API backend", false),
    new TaskModel(3, "Intégrer le formulaire", false),
  ])

  const complete = (t) => updateTask(t, true)
  const cancel = (t) => updateTask(t, false)
  
  const updateTask = (t, completed) => {
    const newTask = new TaskModel();
    const newList = (list.map(task =>
      task.id === t.id ?
        Object.assign(newTask, { ...task, completed: completed }) :
        task))
    setlist(newList)
  }

  return (
    <ListGroup>
      {list.map(t => <Task task={t} key={t.id} complete={complete} cancel={cancel} />)}
    </ListGroup>
  )
}

export default ToDoList
