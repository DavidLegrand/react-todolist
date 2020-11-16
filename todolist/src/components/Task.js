import React from 'react'
import { Badge, ListGroupItem, Button } from 'react-bootstrap'
import TaskModel from '../models/task'

const Task = () => {
  const task = new TaskModel(1, "Finaliser l'API todolist", false)

  const getCompleted = () => task.completed ? "Terminée" : "En cours"
  const getColor = () => task.completed ? "success" : "warning"
  
  return (
    <ListGroupItem variant={getColor()}>
      <h2 className="h4">
        {task.title}
        <Badge className="float-right" variant={getColor()}>{getCompleted()}</Badge>
      </h2>
    </ListGroupItem>
  )
}



export default Task
