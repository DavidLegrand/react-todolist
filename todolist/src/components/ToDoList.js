import React, { useState, useContext } from 'react'
import { ListGroup, Button, ListGroupItem } from 'react-bootstrap'
import TaskModel from '../models/task'
import Task from './Task'
import NewTaskForm from './NewTaskForm'
import { UserIdContext } from '../context'
import { usePutList, useGetList } from '../hooks'

const ToDoList = () => {
  const [list, setlist] = useState(null)
  const [userId, setuserId] = useContext(UserIdContext)
  const endpoint = `https://todolist-react-7495e.firebaseio.com/tasks.json`


  useGetList(endpoint, list, setlist, TaskModel)
  //usePutList(endpoint, list)


  const complete = (t) => updateCompleted(t, true)
  const cancel = (t) => updateCompleted(t, false)
  const completeAll = () => updateCompletedAll(true)
  const cancelAll = () => updateCompletedAll(false)

  const updateCompleted = (t, isComplete) => {
    setlist(list.map(task =>
      task.id === t.id ?
        Object.assign(new TaskModel(), { ...task, completed: isComplete }) :
        task))
  }

  const updateCompletedAll = (isComplete) => {
    setlist(list.map(task =>
      Object.assign(new TaskModel(), { ...task, completed: isComplete })))
  }

  const getLastId = () => list.reduce((prev, curr) => prev.id > curr.id ? prev : curr).id

  const addTask = (task) => {
    setlist([...list, Object.assign(new TaskModel(), {
      ...task,
      created: new Date(),
      id: getLastId() + 1,
      userId: userId
    })])
  }

  return (
    <>
      User Id : <input type="number" value={userId} onChange={(e) => setuserId(+e.target.value)} />
      <ListGroup>
        {
          !list ?
            <ListGroupItem variant="light" className="text-center">... Chargement</ListGroupItem> :
            list.map(t => t.userId === userId && <Task task={t} key={t.id} complete={complete} cancel={cancel} />)
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

export default ToDoList
