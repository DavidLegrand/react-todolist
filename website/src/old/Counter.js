import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incremente, decremente, login, logout } from '../actions'

const Counter = () => {
  const counter = useSelector(state => state.compteur)
  const logged = useSelector(state => state.logged)
  const dispatch = useDispatch();
  return (
    <div>
      <p>Compteur : {counter}</p>
      <button onClick={() => dispatch(incremente())}>+1</button>
      <button onClick={() => dispatch(decremente())}>-1</button>
      <button onClick={() => dispatch(incremente(10))}>+10</button>
      <br/>
      <br/>
      <br/>
      <br/>
      <div>
        {logged ? 'The user is logged' : 'The user is NOT logged'}
        <button onClick={() => dispatch(login())}>Login</button>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>

    </div>
  )
}

export default Counter
