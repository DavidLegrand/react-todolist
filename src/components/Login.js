
import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import Title from './shared/Title'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../store/actions/user'

const Login = () => {
  const [formUserId, setformUserId] = useState(1)
  const isLogged = useSelector(state => state.user.isLogged)
  const dispatch = useDispatch()

  const handleLogin = (e) => {
    setformUserId(+e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(formUserId))
    
  }
  return (
    <>
      <Title>Connexion</Title>
      <Form onSubmit={handleSubmit}>
        <Form.Control type="number" value={formUserId} onChange={handleLogin} />
        <Button type="submit">Se connecter</Button>
      </Form>
      {isLogged && <Redirect to="/tasks" />}
    </>
  )
}

export default Login
