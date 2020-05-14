import React from 'react'
import Comment from './Comment'
import UserBox from './UserBox'
import Card from 'react-bootstrap/Card'

const Post = ({ post }) => {
  return (

    <Card className='my-3'>
      <Card.Header>
        <UserBox user={post.author} width='big' />
        <span>a posté le {post.date}</span>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {post.content}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{post.comments.length} commentaires
      {post.comments.map((c, i) => <Comment key={i} comment={c} />)}
      </Card.Footer>
    </Card>

  )
}

export default Post
