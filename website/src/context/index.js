import React from 'react'

const Logged = React.createContext({
  user: {},
  setUser: () => { },
  isLogged : false,
  setIsLogged : () => Object.keys(this.user).length !== 0
})

export { Logged }