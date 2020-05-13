import React from 'react'
import Comment from './Comment'
import UserBox from './UserBox'

const Post = ({post}) => {
  return (
    <div>
      <p>posté le {post.date}</p>
      <p>{post.content}</p>
      {post.comments.map((c, i)=><Comment key={i} comment={c} />)}
    </div>
  )
}

export default Post
