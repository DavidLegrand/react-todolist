import React, { useContext } from 'react'
import { Navbar, Nav, Button, Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { IsLoggedContext } from '../context'

const NavMenu = () => {
  const [isLogged, setIsLogged] = useContext(IsLoggedContext)
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Nav as="ul" className="mr-auto">
        <Nav.Item as="li">
          <NavLink to="/tasks" className="nav-link" exact>Todolist</NavLink>
        </Nav.Item>
        <Nav.Item as="li">
          <NavLink to="/tasks/new" className="nav-link">Ajouter une tâche</NavLink>
        </Nav.Item>
      </Nav>
      {isLogged &&
        <Form className="form-inline">
          <Button variant="danger" onClick={() => setIsLogged(false)}>Déconnexion</Button>
        </Form>
      }
    </Navbar>

  )
}

export default NavMenu
