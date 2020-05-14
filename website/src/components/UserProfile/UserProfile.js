import React, { useEffect, useState, useContext } from 'react'
import { Logged } from '../../context'
import { useParams } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import FriendList from './FriendList'
import LikedPages from './LikedPages'
import UserPosts from './UserPosts'

const UserProfile = () => {
  const [user, setUser] = useState({})
  const { user: loggedUser } = useContext(Logged);
  const { id } = useParams();

  useEffect(() => {
    if (parseInt(id) === loggedUser.id || !id) {
      setUser(loggedUser)
    } else {
      fetch(`http://localhost:8080/api/users/${id}`)
        .then(res => res.json())
        .then(result => setUser(result))
        .catch(err => console.log(err))
    }
  }, [id])
  return (
    <>
      <Col md={3}>
        <Card>
          <Card.Body>
            <Card.Img variant="top" src={user.profilePic} />
            <h1>{user.firstName} {user.lastName}</h1>
            <h2>{user.login}</h2>
            <h3 className='h5'>{user.job} chez {user.company}</h3>
            <p>{user.bio}</p>
          </Card.Body>
        </Card>
        <FriendList user={user} />
        <LikedPages user={user} />

      </Col>
      <Col md={9}>
        <UserPosts user={user} />
      </Col>
    </>

  )
}

export default UserProfile
