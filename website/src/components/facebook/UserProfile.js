import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
  const {id} = useParams();
  return (
    <div>
      My super profile : {id ? id : "no id"}
    </div>
  )
}

export default UserProfile
