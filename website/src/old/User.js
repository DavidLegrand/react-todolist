import React from 'react'

function User(props) {
  return (
    <li>
      Nom : {props.user.name}, Age : {props.user.age}
    </li>
  )
}

export default User
