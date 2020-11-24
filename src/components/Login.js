
import React, { useContext, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { UserIdContext, IsLoggedContext } from '../context'
import { Redirect } from 'react-router-dom'
import Title from './shared/Title'

const Login = () => {
  const [userId, setuserId] = useContext(UserIdContext)
  const [isLogged, setIsLogged] = useContext(IsLoggedContext)

  const handleLogin = (e) => {
    setuserId(+e.target.value)

  }
  const handleSubmit = () => {
    setIsLogged(true)
  }
  return (
    <>
      <Title>Connexion</Title>
      <Form onSubmit={handleSubmit}>
        <Form.Control type="number" value={userId} onChange={handleLogin} />
        <Button type="submit">Se connecter</Button>
      </Form>
      {isLogged && <Redirect to="/tasks" />}
    </>
  )
}

export default Login
