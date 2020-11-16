import React, { useState } from 'react'

const NewTask = ({ add }) => {
  const [taskName, setTaskName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    let task = { title: taskName, completed: false }
    add(task)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="taskName" type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      <button type="submit">Valider</button>
    </form>
  )
}

export default NewTask