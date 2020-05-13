import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Test = props => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    fetch('http://localhost:8080/api/users/1')
      .then(res => res.json())
      .then(result => setUser(result))
  })
  return (
    <>
      <h1>My user :</h1>
      <p>{user && user.firstName}</p>
      <p>{user && user.lastName}</p>
      <p>{user && user.login}</p>
      <p>{user && user.email}</p>
    </>
  )
}

Test.propTypes = {

}

export default Test
