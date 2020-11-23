import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Nav as="ul">
        <Nav.Item as="li">
          <NavLink to="/tasks" className="nav-link" exact>Todolist</NavLink>
        </Nav.Item>
        <Nav.Item as="li">
          <NavLink to="/tasks/new" className="nav-link">Ajouter une tâche</NavLink>
        </Nav.Item>
      </Nav>
    </Navbar>

  )
}

export default NavMenu
