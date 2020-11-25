import React from 'react'
import PropTypes from 'prop-types'
import { Badge, Button, ListGroupItem } from 'react-bootstrap'
import TaskModel from '../../models/task'
import { Link } from 'react-router-dom'

const Task = ({ task, cancel, complete, loading }) => {
  const getCompleted = () => task.completed ? "Terminée" : "En cours"
  const getColor = () => task.completed ? "success" : "warning"

  return (
    <ListGroupItem variant={getColor()}>
      <h2 className="h4">
        {task.title}
        <Badge className="float-right" variant={getColor()}>{getCompleted()}</Badge>
      </h2>
      <div><Link to={'/tasks/'+task.id}>Afficher les détails</Link></div>
      {task.completed ?
        <Button onClick={() => cancel(task)} variant="dark" disabled={loading}>Annuler</Button> :
        <Button onClick={() => complete(task)} variant="success" disabled={loading}>Terminer</Button>
      }
    </ListGroupItem>
  )
}

Task.propTypes = {
  task: PropTypes.instanceOf(TaskModel).isRequired,
  cancel: PropTypes.func.isRequired,
  complete: PropTypes.func.isRequired,
}

export default React.memo(Task)