import React from 'react'
import { Link } from 'react-router-dom'
import Media from 'react-bootstrap/Media'

const UserBox = ({ user, width }) => {
  width = width === 'big' ? '30px' : '20px'
  return (
    <Link to={'/profile/' + user.id}>
      <Media>
        <img
          src={user.profilePic}
          style={{ width: width }}
          className="align-self-end mr-3"  />
        <Media.Body>{user.firstName} {user.lastName}</Media.Body>
      </Media>
    </Link>
  )
}

export default UserBox
