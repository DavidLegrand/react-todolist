import React, { useState, useEffect, useContext } from 'react'
import { Logged } from '../../context'

const NewsFeed = () => {
  const [feed, setFeed] = useState([]);
  const { user } = useContext(Logged);

  useEffect(() => {
    fetch(`http://localhost:8080/api/users/${user.id}/newsfeed`)
      .then(res => res.json())
      .then(result => setFeed(result))
      .catch(err => { console.log(err) })
  })

  return (<>
    {feed.map((post) =>  <p>{post.content}</p> )}
  </>)
}

export default NewsFeed
