import React from 'react'

function Event() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Click me !</button>
    </form>
  )
}

export default Event
