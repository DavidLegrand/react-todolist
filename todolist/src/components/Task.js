import React from 'react'
import PropTypes from 'prop-types'
import { Badge, Button, ListGroupItem } from 'react-bootstrap'
import TaskModel from '../models/task'

const Task = ({ task, cancel, complete }) => {

  return (
    <ListGroupItem variant={task.getColor()}>
      <h2 className="h4">
        {task.title}
        <Badge className="float-right" variant={task.getColor()}>{task.getCompleted()}</Badge>
      </h2>
      {task.completed ?
        <Button onClick={() => cancel(task)} variant={task.getCancelColor()}>Annuler</Button> :
        <Button onClick={() => complete(task)} variant={task.getCancelColor()}>Terminer</Button>
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