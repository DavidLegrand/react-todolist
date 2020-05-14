import React, { useState, useEffect } from 'react'
import UserBox from '../UserBox'
import axios from 'axios'
import Card from 'react-bootstrap/Card'

const UserPosts = ({ user }) => {
  const [posts, setUserPosts] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const result = await axios(
        `http://localhost:8080/api/users/${user.id}/posts`,
      );
      if (result.data) { setUserPosts(result.data) };

    };
    fetchData();
  }, [user])

  return <> {posts.length > 0 &&
    <Card>
      
    </Card>
  }</>

}

export default UserPosts
