import React from 'react'
import { ListGroup } from 'react-bootstrap'
import TaskModel from '../models/task'
import Task from './Task'

const ToDoList = () => {
  const task1 = new TaskModel(1, "Finaliser les maquettes", true)
  const task2 = new TaskModel(2, "Terminer l'API backend", false)
  const task3 = new TaskModel(3, "Intégrer le formulaire", false)


  const complete = (t) => { console.log(t) }
  const cancel = (t) => { console.log(t) }

  return (
    <ListGroup>
      <Task task={task1} complete={complete} cancel={cancel} />
      <Task task={task2} complete={complete} cancel={cancel} />
      <Task task={task3} complete={complete} cancel={cancel} />
    </ListGroup>
  )
}

export default ToDoList
