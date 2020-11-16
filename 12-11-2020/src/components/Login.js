import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from '../store/actions'

const Login = () => {

  const isAuth = useSelector(state => state.isAuth)
  const dispatch = useDispatch()

  return (
    <>
      {isAuth ?
        <><p>Je suis connecté</p>
          <button onClick={() => dispatch(actions.logout())}>Me déconnecter</button></>
        :
        <> <p>Je suis déconnecté</p>
          <button onClick={() => dispatch(actions.login())}>Me connecter</button></>
      }
    </>
  )
}

export default Login
