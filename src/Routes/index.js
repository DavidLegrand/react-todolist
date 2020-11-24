import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoggedRoute from './LoggedRoute'
import ToDoList from '../components/ToDoList'
import NewTaskForm from '../components/ToDoList/NewTaskForm'
import TaskDetails from '../components/ToDoList/TaskDetails'
import NotFound from '../components/NotFound'
import Login from '../components/Login'


const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact><Redirect to="/tasks" /></Route>
      <LoggedRoute path="/tasks" exact component={ToDoList} />
      <LoggedRoute path="/tasks/new" component={NewTaskForm} />
      <LoggedRoute path="/tasks/:id" component={TaskDetails} />
      <Route path="/login" component={Login} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default Routes
