import React from 'react'
import { Navbar, Nav, Button, Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../store/actions/user'

const NavMenu = () => {
  const isLogged = useSelector(state => state.user.isLogged)
  const dispatch = useDispatch()
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
          <Button variant="danger" onClick={() => dispatch(userLogout())}>Déconnexion</Button>
        </Form>
      }
    </Navbar>

  )
}

export default NavMenu
