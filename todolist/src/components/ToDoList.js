import React from 'react'
import { ListGroup } from 'react-bootstrap'
import TaskModel from '../models/task'
import Task from './Task'

const ToDoList = () => {
  const list = [
    new TaskModel(1, "Finaliser les maquettes", true),
    new TaskModel(2, "Terminer l'API backend", false),
    new TaskModel(3, "Intégrer le formulaire", false),
  ]

  const complete = (t) => { console.log(t) }
  const cancel = (t) => { console.log(t) }

  return (
    <ListGroup>
      {list.map(t => <Task task={t} key={t.id} complete={complete} cancel={cancel} />)}
    </ListGroup>
  )
}

export default ToDoList
