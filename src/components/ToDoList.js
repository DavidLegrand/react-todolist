import React, { useState, useContext, useRef, useCallback } from 'react'
import { ListGroup, Button, ListGroupItem } from 'react-bootstrap'
import TaskModel from '../models/task'
import Task from './Task'
import NewTaskForm from './NewTaskForm'
import { UserIdContext } from '../context'
import { useFetch, usePut } from '../hooks'

const ToDoList = () => {

  const [list, setlist] = useState([])
  const isDataFetched = useRef(false)

  const [userId, setuserId] = useContext(UserIdContext)
  const endpoint = `https://todolist-react-7495e.firebaseio.com/tasks.json`

  const fetch = useFetch(endpoint, setlist, isDataFetched)
  usePut(endpoint, list, isDataFetched)

  const updateCompletedAll = useCallback(
    (isComplete) => { setlist(list.map(task => { return { ...task, completed: isComplete } })) },
    [list]
  )
  const updateCompleted = useCallback(
    (t, isComplete) => { setlist(list.map(task => task.id === t.id ? { ...task, completed: isComplete } : task)) },
    [list]
  )

  const complete = useCallback((t) => updateCompleted(t, true), [updateCompleted])
  const cancel = useCallback((t) => updateCompleted(t, false), [updateCompleted])
  const completeAll = useCallback(() => updateCompletedAll(true), [updateCompletedAll])
  const cancelAll = useCallback(() => updateCompletedAll(false), [updateCompletedAll])


  const addTask = useCallback(
    (task) => {
      setlist([...list, {
        ...task,
        created: new Date(),
        id: list.reduce((prev, curr) => prev.id > curr.id ? prev : curr).id + 1,
        userId: userId
      }])
    },
    [list, userId],
  )

  return (
    <>
      User Id : <input type="number" value={userId} onChange={(e) => setuserId(+e.target.value)} />
      <ListGroup>
        {
          fetch.isLoading ?
            <ListGroupItem variant="light" className="text-center">... Chargement</ListGroupItem> :
            list.map(t => t.userId === userId && <Task task={Object.assign(new TaskModel(), t)} key={t.id} complete={complete} cancel={cancel} />)
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
