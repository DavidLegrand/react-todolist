import React, { useState } from 'react'

const Ticket = ({ name }) => {
  const [count, setcount] = useState(0);
  const increment = () => {
    setcount(count => count + 1)
  }
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={increment}>add</button>
      <h2>{count}</h2>
    </div>
  )
}

export default Ticket
