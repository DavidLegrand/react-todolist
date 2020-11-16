import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import Counter from './Counter'
import Login from './Login'
import ToDoWithList from './ToDoList'
import PostWithList from './PostList'
import { UserIdContext } from '../contexts/UserId'


const Main = () => {
  const { userId, setUserId } = useContext(UserIdContext)
  return (
    <>
      <Counter></Counter>
      <Login></Login>
      <Router>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink exact to="/todos">Todos</NavLink></li>
          <li><NavLink exact to="/posts">Posts</NavLink></li>
        </ul>
        <label>User : <input type="number" value={userId} onChange={(e) => setUserId(e.target.value)} /></label>
        <Switch>
          <Route path="/" exact><div>Welcome home</div></Route>
          <Route path="/todos"><ToDoWithList /></Route>
          <Route path="/todos/:userId"><ToDoWithList /></Route>
          <Route path="/posts"><PostWithList /></Route>
          <Route path="/posts/:userId"><PostWithList /></Route>
        </Switch>
      </Router>
    </>
  )
}

export default Main
