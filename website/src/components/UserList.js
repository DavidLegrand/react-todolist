import React, { useRef } from 'react'
import User from './User'

function UserList(props) {
  return (
    <ul>
      {props.list.map(u => <User key={u.id} user={u} />)}
    </ul>
  )
}

export default UserList
