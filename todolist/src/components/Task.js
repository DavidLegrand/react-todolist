import React from 'react'
import PropTypes from 'prop-types'
import { Badge, Button, ListGroupItem } from 'react-bootstrap'
import TaskModel from '../models/task'


const Task = () => {
  const task = new TaskModel(1, "Finaliser l'API todolist", false)

  const getCompleted = () => task.completed ? "Terminée" : "En cours"
  const getColor = () => task.completed ? "success" : "warning"
  const getButtonColor = () => task.completed ? "dark" : "success"

  return (
    <ListGroupItem variant={getColor()}>
      <h2 className="h4">
        {task.title}
        <Badge className="float-right" variant={getColor()}>{getCompleted()}</Badge>
      </h2>
      {task.completed ?
        <Button onClick={() => console.log(task, "tâche annulée")} variant={getButtonColor()}>Annuler</Button> :
        <Button onClick={() => console.log(task, "tâche terminée")} variant={getButtonColor()}>Terminer</Button>
      }
    </ListGroupItem>
  )
}


export default Task