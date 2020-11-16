import React from 'react'
const checked = {
  textDecoration: "line-through",
  opacity: 0.6
}

const Task = (props) => {

  const handleChange = () => {
    props.update({...props.item, completed: !props.item.completed})
  }
  return (
    <>
      <input type="checkbox" onChange={handleChange} checked={props.item.completed} />
      <span style={props.item.completed ? checked : null}>{props.item.title}</span>
      <button onClick={() => props.remove(props.item)}>x</button>
    </>
  )
}

export default Task