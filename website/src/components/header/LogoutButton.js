import React, { useContext } from 'react'
import { Logged } from '../../context'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const LogoutButton = () => {
  const { setUser, setIsLogged } = useContext(Logged);
  const handleLogout = () => {
    setUser({});
    setIsLogged(false);
  }
  return (
    <Form inline>
      <Button onClick={handleLogout}>Déconnexion</Button>
    </Form>
  )
}

export default LogoutButton
