import React from 'react'
import { Badge, ListGroupItem } from 'react-bootstrap'
import TaskModel from '../models/task'

const Task = () => {
  const task = new TaskModel(1, "Ceci est une tâche")
  
  const getCompleted = () => task.completed ? "Terminée" : "En cours"
  const getColor = () => task.completed ? "success" : "warning"

  return (
    <ListGroupItem variant={getColor()}>
      {task.title} <Badge variant={getColor()}>{getCompleted()}</Badge>
    </ListGroupItem>
  )
}

export default Task
