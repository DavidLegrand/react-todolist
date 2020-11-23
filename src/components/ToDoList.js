import React, { useState } from 'react'
import { ListGroup, Button, ListGroupItem } from 'react-bootstrap'
import TaskModel from '../models/task'
import Task from './Task'

const ToDoList = () => {
  const [list, setlist] = useState([
    new TaskModel(1, "Finaliser les maquettes", true),
    new TaskModel(2, "Terminer l'API backend", false),
    new TaskModel(3, "Intégrer le formulaire", false),
  ])

  const complete = (t) => updateCompleted(t, true)
  const cancel = (t) => updateCompleted(t, false)
  const completeAll = () => updateCompletedAll(true)
  const cancelAll = () => updateCompletedAll(false)

  const updateCompleted = (t, isComplete) => {
    setlist(list.map(task =>
      task.id === t.id ?
        Object.assign(new TaskModel(), { ...task, completed: isComplete }) :
        task))
  }

  const updateCompletedAll = (isComplete) => {
    setlist(list.map(task =>
      Object.assign(new TaskModel(), { ...task, completed: isComplete })))
  }

  return (
    <>
      <ListGroup>
        {list.map(t => <Task task={t} key={t.id} complete={complete} cancel={cancel} />)}
        <ListGroupItem variant="light" className="text-center">
          <Button onClick={() => cancelAll()} variant="dark" >Tout annuler</Button>
          <Button onClick={() => completeAll()} variant="success">Tout terminer</Button>
        </ListGroupItem>
      </ListGroup>
    </>
  )
}

export default ToDoList
