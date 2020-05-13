import React from 'react';
import { Switch, Route } from "react-router-dom";
import NavMenu from './components/facebook/NavMenu'
import HomePage from './components/facebook/HomePage'
import UserProfile from './components/facebook/UserProfile'
function App() {
  return (
    <>
      <header>
        <NavMenu />
      </header>
      <Switch>
        <Route path="/" exact><HomePage /></Route>
        <Route path="/profile/:id"><UserProfile /></Route>
        <Route path="/my-profile"><UserProfile /></Route>
      </Switch>
    </>

  )
}

export default App;
