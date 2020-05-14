import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { Logged } from './context'

import HomePage from './components/HomePage'
import UserProfile from './components/UserProfile/UserProfile'
import Header from './components/header'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Counter from './old/Counter'

function App() {
  const [user, setUser] = useState({})
  const [isLogged, setIsLogged] = useState(false)
  const value = { user, setUser, isLogged, setIsLogged }

  return (
    <Logged.Provider value={value} >
      <Container>
        <Row>
          <Header />
        </Row>

        {isLogged &&
          <Switch>
            <Row>
              <Route path="/" exact><HomePage /></Route>
              <Route path="/profile/:id"><UserProfile /></Route>
              <Route path="/my-profile"><UserProfile /></Route>
            </Row>

          </Switch>
        }
      </Container>
    </Logged.Provider>
  )
}

export default App;
