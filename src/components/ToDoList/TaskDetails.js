import React, { useState } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { useFetch } from '../../hooks'
import Title from '../shared/Title'
import NotFound from '../NotFound'

const TaskDetails = () => {
  const { id } = useParams()
  const [task, settask] = useState({})
  const fetch = useFetch(`https://todolist-react-7495e.firebaseio.com/tasks.json?orderBy="id"&equalTo=${id}`, settask)

  return (
    <>
      {fetch.isLoading ?
        "...Chargement" :
        <>
          {task[0] === null ?
            <NotFound /> :
            <>
              <Title>{task[0].title}</Title>
              <Table striped bordered hover>
                <tbody>
                  <tr><td>ID</td><td>{task[0].id}</td></tr>
                  <tr><td>Statut</td><td>{task[0].completed ? "Terminée" : "En cours"}</td></tr>
                  <tr><td>Créée le</td><td>{new Date(task[0].created).toLocaleDateString()}</td></tr>
                  <tr><td>A</td><td>{new Date(task[0].created).toLocaleTimeString()}</td></tr>
                  <tr><td>Description</td><td>{task[0].description}</td></tr>
                  <tr><td>Utilisateur</td><td>{task[0].userId}</td></tr>
                </tbody>
              </Table>
            </>
          }
        </>
      }
    </>
  )
}

export default TaskDetails
