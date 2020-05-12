import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Confirm from './Confirm'

const Task = props => {
  const [displayConfirm, setDisplayConfirm] = useState(false)
  
  const handleChange = () => {
    props.toggleDone(props.task)
  }

  const handleClick = () => {
    setDisplayConfirm(!displayConfirm)
  }

  const confirm = () => {
    props.deleteTask(props.task)
  }

  return (
    <>
      <tr>
        <td><input type="checkbox" onChange={handleChange} /></td>
        <td style={props.task.done ? { textDecoration: 'line-through' } : {}}>{props.task.description}</td>
        <td><button onClick={handleClick}>X</button></td>
      </tr>
      {displayConfirm &&
        <tr><td colSpan="3"><Confirm confirm={confirm} cancel={handleClick} /></td></tr>
      }
    </>
  )
}

Task.propTypes = {

}

export default Task
