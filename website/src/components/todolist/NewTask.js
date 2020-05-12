import React, { useState } from 'react'
import PropTypes from 'prop-types'

const NewTask = props => {
  const [newTask, setNewTask] = useState('')

  const handleChange = (e) => {
    setNewTask(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(newTask);
    setNewTask('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTask} onChange={handleChange} />
      <button type="submit">+</button>
    </form>
  )
}

NewTask.propTypes = {
  addTask: PropTypes.func.isRequired,
}

export default NewTask
