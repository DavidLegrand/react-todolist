import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu = props => {
  return (
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/my-profile">My profile</NavLink></li>
      <li><NavLink to="/profile/300">Profile of user 300</NavLink></li>
    </ul>
  )
}

export default NavMenu
