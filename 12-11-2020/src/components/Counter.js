import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from '../store/actions'

const Counter = () => {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Compteur : {counter}</h1>
      <button onClick={() => dispatch(actions.increment())}>+1</button>
      <button onClick={() => dispatch(actions.decrement())}>-1</button>
      
      
      <button onClick={() => dispatch(actions.increment(5))}>+5</button>
      <button onClick={() => dispatch(actions.decrement(-5))}>-5</button>
    </div>
  )
}

export default Counter
