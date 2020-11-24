import React, { useContext } from 'react'
import { IsLoggedContext } from '../context'
import { Route, Redirect } from 'react-router-dom'

const LoggedRoute = ({ component: Component, path }) => {
  const [isLogged] = useContext(IsLoggedContext)

  return (
    <Route path={path}>
      {isLogged ? <Component /> : <Redirect to="/login" />}
    </Route >
  )
}

export default LoggedRoute
