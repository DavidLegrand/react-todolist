import React, { useState, useEffect, useContext } from 'react'
import { Logged } from '../../../context'

const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [error, setError] = useState('');

  const { user, setUser, isLogged, setIsLogged } = useContext(Logged);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/api/users/?login=' + login)
      .then(res => res.json())
      .then(result => {
        if (result.length === 1) {
          setUser(result[0]);
          setIsLogged(true);
          setError(null);
        } else {
          throw new Error("Login Invalide")
        }
      })
      .catch(err => { setError(err.message) })
  }

  useEffect(() => {
    console.log(isLogged);
  })

  return (

    <form onSubmit={handleSubmit}>
      <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
      <input type="password" />
      <button type="submit">Connexion</button>
      {error}
    </form>
  )
}

export default LoginForm
