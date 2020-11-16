import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import action from '../../store/actions'


const Login = () => {

  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div>
      Vous vous-êtes <strong>{isLogged ? "connecté" : "déconnecté"}</strong> avec succès
      {isLogged ?
        <button onClick={() => dispatch(action.logout())}>Déconnexion</button> :
        <button onClick={() => dispatch(action.login())}>Connexion</button>
      }
    </div>
  )
}

export default Login
