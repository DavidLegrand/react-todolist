import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const LoggedRoute = ({ component: Component, path }) => {
  const isLogged = useSelector(state => state.user.isLogged)

  return (
    <Route path={path}>
      {isLogged ? <Component /> : <Redirect to="/login" />}
    </Route >
  )
}

export default LoggedRoute
