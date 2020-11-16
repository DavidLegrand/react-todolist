import React from 'react'

const Post = (props) => {
  return (
    <div>
      <h2>{props.item.title}</h2>
      <p>{props.item.body}</p>
    </div>
  )
}

export default Post