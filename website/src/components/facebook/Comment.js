import React from 'react'
import UserBox from './UserBox'
const Comment = ({comment}) => {
  return (
    <div style={{paddingLeft:'25px'}}>
      <UserBox user={comment.author} /> : {comment.content}
    </div>
  )
}

export default Comment
