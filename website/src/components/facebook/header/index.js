import React, { useContext } from 'react'
import LoginForm from './LoginForm'
import LogoutButton from './LogoutButton'
import NavMenu from './NavMenu'
import { Logged }  from '../../../context'

const Header = () => {
  const logged = useContext(Logged);
  return (
    <>
      {
        logged.in ?
          <><LogoutButton /><NavMenu /></>
          :
          <LoginForm />
      }
    </>
  )
}

export default Header
