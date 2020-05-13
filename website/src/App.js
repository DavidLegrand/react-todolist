import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { Logged } from './context'
import HomePage from './components/facebook/HomePage'
import UserProfile from './components/facebook/UserProfile'
import Header from './components/facebook/header'

function App() {
  const [user, setUser] = useState({})
  const [isLogged, setIsLogged] = useState(false)
  useEffect(() => {
    console.log(user)
  })
  return (
    <Logged.Provider value={{ user, setUser, isLogged, setIsLogged }} >
      User : {user.firstName}, {user.lastName}
      <Header />
      {isLogged &&
        <Switch>
          <Route path="/" exact><HomePage /></Route>
          <Route path="/profile/:id"><UserProfile /></Route>
          <Route path="/my-profile"><UserProfile /></Route>
        </Switch>
      }
    </Logged.Provider>
  )
}

export default App;
