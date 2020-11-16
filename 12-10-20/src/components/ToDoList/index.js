import React from 'react'
import List from '../helpers/List'
import Title from '../helpers/Title'
import NewTask from './NewTask'
import Task from './Task'
import styles from './ToDoList.module.css'
import withList from '../hoc/withList'

const endpoint = `https://jsonplaceholder.typicode.com/todos?userId=`;

const ToDoList = ({ list, removeItem, updateList, addItem }) => {
  return (
    <div className={styles.container}>
      <Title>To Do List</Title>
      <List list={list} remove={removeItem} update={updateList}>
        <Task />
      </List>
      <NewTask add={addItem} />
    </div>
  )
}

const ToDoWithList = withList(ToDoList, endpoint)

export default ToDoWithList