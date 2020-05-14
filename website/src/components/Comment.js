import React from 'react'
import UserBox from './UserBox'

import Card from 'react-bootstrap/Card'
const Comment = ({ comment }) => {
  return (
    <Card className='ml-5'>
      <Card.Body><UserBox user={comment.author} />{comment.content}</Card.Body>
    </Card>


  )
}

export default Comment
