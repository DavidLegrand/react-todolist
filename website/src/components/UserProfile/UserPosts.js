import React, { useState, useEffect } from 'react'
import UserBox from '../UserBox'
import axios from 'axios'
import Col from 'react-bootstrap/Col'
import Post from '../Post'

const UserPosts = ({ user }) => {
  const [posts, setUserPosts] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const result = await axios(
        `http://localhost:8080/api/users/${user.id}/posts`,
      );
      if (result.data.posts) { setUserPosts(result.data.posts) };

    };
    fetchData();
  }, [user])

  return <>
    {posts.map((post) => <Col key={post.id}  xs={12}><Post post={{author:user, ...post}} /></Col>)}
  </>

}

export default UserPosts
