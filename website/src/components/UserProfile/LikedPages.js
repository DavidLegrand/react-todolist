import React, { useState, useEffect } from 'react'
import UserBox from '../UserBox'
import axios from 'axios'
import Card from 'react-bootstrap/Card'

const LikedPages = ({ user }) => {
  const [list, setLikedPages] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const result = await axios(
        `http://localhost:8080/api/users/${user.id}/likes`,
      );
      if (result.data.pages) { setLikedPages(result.data.pages) };

    };
    fetchData();
  }, [user])

  return <> {list.length > 0 &&
    <Card>
      <Card.Body>
      <Card.Title><h2>Mes likes</h2></Card.Title>
        {list.map((p) => <p key={p.id}>{p.name}</p>)}
      </Card.Body>
    </Card>
  }</>

}

export default LikedPages
