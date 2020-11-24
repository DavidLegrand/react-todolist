import React, { useState, useCallback, useEffect } from 'react'
import ToDoListView from './ToDoListView'
import Title from '../shared/Title'
import { useDispatch, useSelector } from 'react-redux'
import fetchTasks from '../../store/actions/todolist'

const ToDoList = () => {
  const dispatch = useDispatch()
  const list = useSelector(state => state.todolist.list)
  const loading = useSelector(state => state.todolist.loading)
  const userId = useSelector(state => state.user.userId)

  useEffect(() => {
    dispatch(fetchTasks)
  }, [dispatch])

  const [filteredList, setfilteredList] = useState([])
  const [statusFilter, setStatusFilter] = useState('all')


  useEffect(() => {
    if (statusFilter === 'all') {
      setfilteredList(list.filter(task => task.userId === userId))
    } else {
      setfilteredList(list.filter(task => task.userId === userId && task.completed === JSON.parse(statusFilter)))
    }
  }, [list, userId, statusFilter])

  const updateCompletedAll = useCallback(
    (isComplete) => { /*setlist(list.map(task => { return { ...task, completed: isComplete } }))*/ },
    [list]
  )
  const updateCompleted = useCallback(
    (t, isComplete) => { /*setlist(list.map(task => task.id === t.id ? { ...task, completed: isComplete } : task))*/ },
    [list]
  )

  const complete = useCallback((t) => updateCompleted(t, true), [updateCompleted])
  const cancel = useCallback((t) => updateCompleted(t, false), [updateCompleted])
  const completeAll = useCallback(() => updateCompletedAll(true), [updateCompletedAll])
  const cancelAll = useCallback(() => updateCompletedAll(false), [updateCompletedAll])

  const addTask = useCallback(
    (task) => {
      /*setlist([...list, {
        ...task,
        created: new Date(),
        id: list.reduce((prev, curr) => prev.id > curr.id ? prev : curr).id + 1,
        userId: userId
      }])*/
    },
    [list, userId],
  )

  return (
    <>
      <Title>To Do List</Title>
      {loading ?
        <h2 variant="light" className="text-center">... Chargement</h2> :
        <ToDoListView
          list={filteredList}
          complete={complete}
          cancel={cancel}
          completeAll={completeAll}
          cancelAll={cancelAll}
          setFilter={setStatusFilter}
        />
      }
    </>
  )
}

export default ToDoList
