import React from 'react'
import { Badge, ListGroupItem, Button } from 'react-bootstrap'
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
        <Button onClick={() => console.log(task)} variant={getButtonColor()}>Annuler</Button> :
        <Button onClick={() => console.log(task)} variant={getButtonColor()}>Terminer</Button>
      }
    </ListGroupItem>
  )
}



export default Task
