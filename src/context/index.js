import React, { useState, createContext } from 'react'

const defaultUserId = 1
const UserIdContext = createContext(defaultUserId)
const UserIdProvider = ({ children }) => {
  const [userId, setUserId] = useState(defaultUserId)
  return (
    <UserIdContext.Provider value={[userId, setUserId]}>
      {children}
    </UserIdContext.Provider>
  )
}

const defaultIsLogged = false
const IsLoggedContext = createContext(defaultIsLogged)
const IsLoggedProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(defaultIsLogged)
  return (
    <IsLoggedContext.Provider value={[isLogged, setIsLogged]}>
      {children}
    </IsLoggedContext.Provider>
  )
}

const GlobalContextProvider = ({ children }) => {
  return (
    <IsLoggedProvider>
      <UserIdProvider>
        {children}
      </UserIdProvider>
    </IsLoggedProvider>

  )
}
export { GlobalContextProvider, UserIdContext, IsLoggedContext }
