import React, { useState, useEffect, useContext } from 'react'
import { Logged } from '../context'
import Post from './Post'
import Col from 'react-bootstrap/Col'
const NewsFeed = () => {
  const [feed, setFeed] = useState([]);
  const { user } = useContext(Logged);

  useEffect(() => {
    fetch(`http://localhost:8080/api/users/${user.id}/newsfeed`)
      .then(res => res.json())
      .then(result => setFeed(result))
      .catch(err => console.log(err))
  }, [user.id])

  return (<>
    {feed.map((post) => <Col xs={12}><Post key={post.id} post={post}/></Col>)}
  </>)
}

export default NewsFeed
