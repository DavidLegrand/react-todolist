import React from 'react'
import { NavLink } from 'react-router-dom'


import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'

const NavMenu = props => {
  return (

    <Nav className="mr-auto">
      <Nav.Link as={NavLink} to="/" exact activeClassName="active">Accueil</Nav.Link>
      <Nav.Link as={NavLink} to="/my-profile" exact activeClassName="active">Mon profil</Nav.Link>
    </Nav>
  )
}

export default NavMenu
