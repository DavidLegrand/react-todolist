import React, { useState, useContext, useRef, useCallback, useEffect } from 'react'
import { UserIdContext } from '../context'
import { useFetch, usePut } from '../hooks'
import ToDoListView from './ToDoListView'

const ToDoList = () => {

  const [list, setlist] = useState([])
  const [filteredList, setfilteredList] = useState([])
  const [userId, setuserId] = useContext(UserIdContext)
  const isDataFetched = useRef(false)

  const endpoint = `https://todolist-react-7495e.firebaseio.com/tasks.json`

  const fetch = useFetch(endpoint, setlist, isDataFetched)
  usePut(endpoint, list, isDataFetched)

  useEffect(() => {
    setfilteredList(list.filter(task => task.userId === userId))
  }, [list, userId])

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
    <ToDoListView
      list={filteredList}
      complete={complete}
      cancel={cancel}
      completeAll={completeAll}
      cancelAll={cancelAll}
      addTask={addTask}
      isLoading={fetch.isLoading}
    />
    </>
  )
}

export default ToDoList
