import React from 'react'
import styles from './Task.module.css'


const Task = ({ task, completed, onchange }) => {
  return (
    <li>
      <label className={task.completed ? styles.completedLabel : ''}>
        <input type="checkbox" onChange={() => onchange(task)} checked={task.completed} />{task.title}
      </label> - Statut : 
      <span className={task.completed ? styles.completedSpan : styles.uncompletedSpan}>{completed(task.completed)}</span>
    </li>
  )
}

export default Task
