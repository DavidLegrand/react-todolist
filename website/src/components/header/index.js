import React, { useContext } from 'react'
import LoginForm from './LoginForm/LoginForm'
import LogoutButton from './LogoutButton'
import NavMenu from './NavMenu'
import { Logged } from '../../context'

import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
  const logged = useContext(Logged);
  return (
    <Col>
      <Navbar bg="dark" variant="dark">
        {
          logged.isLogged ?
            <>
              <NavMenu />
              <LogoutButton />
            </>
            :
            <LoginForm />
        }
      </Navbar>
    </Col>
  )
}

export default Header
