import React, { useState, useContext } from 'react'
import { Logged } from '../../../context'

import Form from 'react-bootstrap/form'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

const LoginForm = (props) => {
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

  return (<Col>
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Col>
          <Form.Control
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            placeholder="Login" />
        </Col>
        <Col>
          <Form.Control type="password" placeholder="Mot de passe" />
        </Col>
        <Col>
          <Button variant="primary" type="submit">Submit</Button>
        </Col>
      </Form.Row>
    </Form>
    {error && <Alert variant="danger">{error}</Alert>}
  </Col>
  )
}

export default LoginForm
