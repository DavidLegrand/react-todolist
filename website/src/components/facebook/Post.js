import React from 'react'
import Comment from './Comment'
import UserBox from './UserBox'

const Post = ({post}) => {
  return (
    <div style={{border:'1px silver solid', margin: '25px', padding: '25px'}}>
      <UserBox user={post.author} />
      <span>a posté le {post.date}</span>
      <p>{post.content}</p>
      {post.comments.map((c, i)=><Comment key={i} comment={c} />)}
    </div>
  )
}

export default Post
