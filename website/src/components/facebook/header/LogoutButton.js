import React, { useContext } from 'react'
import { Logged } from '../../../context'

const LogoutButton = () => {
  const { setUser, setIsLogged } = useContext(Logged);
  const handleLogout = () => {
    setUser({});
    setIsLogged(false);
  }
  return (
    <button onClick={handleLogout}>Déconnexion</button>
  )
}

export default LogoutButton
