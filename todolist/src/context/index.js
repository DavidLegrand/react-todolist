import React, { useState, createContext } from 'react'

const defaultUserId = 'light'
const UserIdContext = createContext(defaultUserId)
const UserIdProvider = ({ children }) => {
  const [userId, setUserId] = useState(defaultUserId)
  return (
    <UserIdContext.Provider value={[userId, setUserId]}>
      {children}
    </UserIdContext.Provider>
  )
}
export { UserIdProvider, UserIdContext }
