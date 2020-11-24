import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import Title from '../shared/Title'
import { useSelector } from 'react-redux'

const TaskDetails = () => {
  const { id } = useParams()
  const list = useSelector(state => state.todolist.list)

  const [task, settask] = useState(null)
  useEffect(() => {
    settask(list.find(t => t.id === +id))
  }, [])

  return (
    <>
      {task &&
        <>
          <Title>{task.title}</Title>
          <Table striped bordered hover>
            <tbody>
              <tr><td>ID</td><td>{task.id}</td></tr>
              <tr><td>Statut</td><td>{task.completed ? "Terminée" : "En cours"}</td></tr>
              <tr><td>Créée le</td><td>{new Date(task.created).toLocaleDateString()}</td></tr>
              <tr><td>A</td><td>{new Date(task.created).toLocaleTimeString()}</td></tr>
              <tr><td>Description</td><td>{task.description}</td></tr>
              <tr><td>Utilisateur</td><td>{task.userId}</td></tr>
            </tbody>
          </Table>
        </>
      }
    </>
  )
}

export default TaskDetails
