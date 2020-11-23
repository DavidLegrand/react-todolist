import React, { useEffect } from 'react'
import Title from './shared/Title'
import NewTaskForm from './NewTaskForm'
import Task from './Task'
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import TaskModel from '../models/task'

const ToDoListView = ({ list, complete, cancel, completeAll, cancelAll, addTask, isLoading }) => {

  return (
    <>
      <Title>To Do List</Title>
      
      <ListGroup>
        {
          isLoading ?
            <ListGroupItem variant="light" className="text-center">... Chargement</ListGroupItem> :
            list.map(t => <Task task={Object.assign(new TaskModel(), t)} key={t.id} complete={complete} cancel={cancel} />)
        }
        <ListGroupItem variant="light" className="text-center">
          <Button onClick={() => cancelAll()} variant="dark" >Tout annuler</Button>
          <Button onClick={() => completeAll()} variant="success">Tout terminer</Button>
        </ListGroupItem>
      </ListGroup>
      <NewTaskForm add={addTask} />
    </>
  )
}

export default React.memo(ToDoListView)
