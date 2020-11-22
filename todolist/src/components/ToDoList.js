import React, { useState, useEffect, useContext } from 'react'
import { ListGroup, Button, ListGroupItem } from 'react-bootstrap'
import TaskModel from '../models/task'
import Task from './Task'
import NewTaskForm from './NewTaskForm'
import { UserIdContext } from '../context'

const ToDoList = () => {
  const [list, setlist] = useState([])
  const [userId, setuserId] = useContext(UserIdContext)
  const [loading, setloading] = useState(true)

  const endpoint = `https://todolist-react-7495e.firebaseio.com/tasks.json?userId=${userId}`

  useEffect(() => {
    const sendData = () => {
      const options = {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(list),
        headers: { 'Content-Type': 'application/json' },
      }
      fetch(endpoint, options)
        .then(response => { if (response.ok) console.log('data sent to server'); return response.json() })
        .then(data => console.log("data", data, "list", list, "loading", loading,))
        .catch(error => console.error(error))
    }
    if (loading === false && list.length > 0)
      sendData()
  }, [list, endpoint])

  useEffect(() => {
    const getData = () => {
      fetch(endpoint)
        .then(response => response.json())
        .then(data => {
          setlist(
            data.map(task =>
              Object.assign(new TaskModel(), task))
          )
        })
        .then(() => setloading(false))
        .catch(error => console.error(error))
    }
    getData()
  }, [endpoint])


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
          loading ?
            <ListGroupItem variant="light" className="text-center">... Chargement{list.length}{loading}</ListGroupItem> :
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
