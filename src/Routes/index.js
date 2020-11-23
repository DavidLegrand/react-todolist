import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ToDoList from '../components/ToDoList'
import NewTaskForm from '../components/ToDoList/NewTaskForm'
import TaskDetails from '../components/ToDoList/TaskDetails'
import NotFound from '../components/NotFound'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact><Redirect to="/tasks" /></Route>
      <Route path="/tasks" exact component={ToDoList} />
      <Route path="/tasks/new" component={NewTaskForm} />
      <Route path="/tasks/:id" component={TaskDetails} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default Routes
