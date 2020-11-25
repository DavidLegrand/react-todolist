import React, { useState, useCallback, useEffect } from 'react'
import ToDoListView from './ToDoListView'
import Title from '../shared/Title'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks, updateTask, postTask } from '../../store/actions/todolist'

const ToDoList = () => {
  const dispatch = useDispatch()
  const list = useSelector(state => state.todolist.list)
  const loading = useSelector(state => state.todolist.loading)
  const userId = useSelector(state => state.user.id)
  const updateloading = useSelector(state => state.todolist.updateloading)

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
    (isComplete) => { list.map(task => dispatch(updateTask({ ...task, completed: isComplete }))) },
    [list, dispatch]
  )
  const updateCompleted = useCallback(
    (t, isComplete) => { dispatch(updateTask({ ...t, completed: isComplete })) },
    [dispatch]
  )

  const complete = useCallback((t) => updateCompleted(t, true), [updateCompleted])
  const cancel = useCallback((t) => updateCompleted(t, false), [updateCompleted])
  const completeAll = useCallback(() => updateCompletedAll(true), [updateCompletedAll])
  const cancelAll = useCallback(() => updateCompletedAll(false), [updateCompletedAll])

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
          loading={updateloading}
        />
      }
    </>
  )
}

export default ToDoList
