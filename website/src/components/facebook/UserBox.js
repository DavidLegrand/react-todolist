import React from 'react'

const UserBox = ({user}) => {
  return (
    <div>
      <img src={user.profilePic} style={{width:'25px'}}/>
      <span>{user.firstname} {user.lastName}</span>
    </div>
  )
}

export default UserBox
