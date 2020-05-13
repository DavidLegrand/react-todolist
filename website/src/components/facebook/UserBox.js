import React from 'react'

const UserBox = ({user}) => {
  return (
    <span>
      <img src={user.profilePic} style={{width:'25px'}}/>
      <strong> {user.firstName} {user.lastName} </strong>
    </span>
  )
}

export default UserBox
