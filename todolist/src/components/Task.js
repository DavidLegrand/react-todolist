import React from 'react'
import PropTypes from 'prop-types'
import { Badge, Button, ListGroupItem } from 'react-bootstrap'
import TaskModel from '../models/task'

const Task = ({ task, cancel, complete }) => {
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
        <Button onClick={() => cancel(task)} variant={getButtonColor()}>Annuler</Button> :
        <Button onClick={() => complete(task)} variant={getButtonColor()}>Terminer</Button>
      }
    </ListGroupItem>
  )
}

Task.propTypes = {
  task: PropTypes.instanceOf(TaskModel).isRequired,
  cancel: PropTypes.func.isRequired,
  complete: PropTypes.func.isRequired,
}

export default Task