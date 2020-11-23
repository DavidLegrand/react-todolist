import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ToDoList from '../components/ToDoList'
import NewTaskForm from '../components/ToDoList/NewTaskForm'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact><Redirect to="/tasks" /></Route>
      <Route path="/tasks" exact component={ToDoList} />
      <Route path="/tasks/new" component={NewTaskForm} />
    </Switch>
  )
}

export default Routes
