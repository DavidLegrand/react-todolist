import React from 'react'
import Task from './Task'
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import TaskModel from '../models/task'
import ToDoListFilter from './ToDoListFilter'

const ToDoListView = ({ list, complete, cancel, completeAll, cancelAll, setFilter }) => {

  return (
    <>
      <ListGroup>
        <ListGroupItem variant="light" className="text-center">
          <ToDoListFilter setFilter={setFilter} />
        </ListGroupItem>
        {list.map(t => <Task task={Object.assign(new TaskModel(), t)} key={t.id} complete={complete} cancel={cancel} />)}
        <ListGroupItem variant="light" className="text-center">
          <Button onClick={() => cancelAll()} variant="dark" >Tout annuler</Button>
          <Button onClick={() => completeAll()} variant="success">Tout terminer</Button>
        </ListGroupItem>
      </ListGroup>

    </>
  )
}

export default React.memo(ToDoListView)
