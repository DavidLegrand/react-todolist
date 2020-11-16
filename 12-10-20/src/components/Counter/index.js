import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import action from '../../store/actions'


const Counter = () => {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      Vous avez cliqué {counter} fois
      <button onClick={() => dispatch(action.increment())}>+</button>
      <button onClick={() => dispatch(action.decrement())}>-</button>
    </div>
  )
}

export default Counter
