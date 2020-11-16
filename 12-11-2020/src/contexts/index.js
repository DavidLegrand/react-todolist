import React, { useState } from 'react'
const UserIdContext = React.createContext('')

const UserIdProvider = ({ children }) => {
  const [userId, setUserId] = useState('')
  return (
    <UserIdContext.Provider value={[ userId, setUserId ]}>
      {children}
    </UserIdContext.Provider>
  )
}

export {UserIdProvider, UserIdContext }