import React from 'react'
import UserBox from './UserBox'
const Comment = ({comment}) => {
  return (
    <div>
      <UserBox user={comment.author} />
      {comment.content}
    </div>
  )
}

export default Comment
