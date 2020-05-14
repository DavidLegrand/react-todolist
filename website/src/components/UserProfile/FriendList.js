import React, { useState, useEffect } from 'react'
import UserBox from '../UserBox'
import axios from 'axios'
import Card from 'react-bootstrap/Card'

const FriendList = ({ user }) => {
  const [list, setFriendList] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const result = await axios(
        `http://localhost:8080/api/users/${user.id}/friends`,
      );
      if (result.data.friends) { setFriendList(result.data.friends) };

    };
    fetchData();
  }, [user])

  return <> {list.length > 0 &&
    <Card>
      <Card.Body>
      <Card.Title><h2>Mes amis</h2></Card.Title>
        {list.map((f) => <UserBox key={f.id} user={f} />)}
      </Card.Body>
    </Card>
  }</>

}

export default FriendList
