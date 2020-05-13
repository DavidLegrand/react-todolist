import React, { useState, useContext } from 'react'
import { Logged } from '../../../context'

const LoginForm = () => {
  const [login, setLogin] = useState('scelli0');
  const [error, setError] = useState('');

  const { setUser, setIsLogged } = useContext(Logged);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/api/users/?login=' + login)
      .then(res => res.json())
      .then(result => {
        if (result.length === 1) {
          setUser(result[0]);
          setError(null);
          setIsLogged(true);
        } else {
          throw new Error("Login Invalide")
        }
      })
      .catch(err => { setError(err.message) })
    return () => {
      console.log('cleanup');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div><label>Login : <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} /></label></div>
      <div><label>Mot de passe : <input type="password" /></label></div>
      <div><button type="submit">Connexion</button></div>
      <div>{error}</div>
    </form>
  )
}

export default LoginForm
