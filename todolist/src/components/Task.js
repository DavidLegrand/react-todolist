import React from 'react'
import { Badge, ListGroupItem, Button } from 'react-bootstrap'
import TaskModel from '../models/task'

const Task = () => {
  const task = new TaskModel(1, "Finaliser l'API todolist", false)



  return (
    <ListGroupItem variant={task.getColor()}>
      <h2 className="h4">
        {task.title}
        <Badge className="float-right" variant={task.getColor()}>{task.getCompleted()}</Badge>
      </h2>
      {task.completed ?
        <Button onClick={() => console.log(task)} variant={task.getButtonColor()}>Annuler</Button> :
        <Button onClick={() => console.log(task)} variant={task.getButtonColor()}>Terminer</Button>
      }
    </ListGroupItem>
  )
}



export default Task
