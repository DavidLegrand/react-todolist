import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import Title from '../shared/Title'

const NewTaskForm = ({ add }) => {
  const initialState = { title: '', completed: false, description: '' }
  const [task, setTask] = useState(initialState)
  const handleSubmit = (e) => {
    e.preventDefault()
    add(task)
    setTask(initialState)
  }
  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;
    setTask({ ...task, [name]: value });
  }
  return (
    <>
      <Title>Ajouter une tâche</Title>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Titre</Form.Label>
          <Form.Control type="text" placeholder="Titre de la tâche" name="title" value={task.title} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label >Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Description de la tâche" name="description" value={task.description} onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label className="d-block">Terminée</Form.Label>
          <Form.Check className="d-inline" type="checkbox" name="completed" value={task.completed} onChange={handleChange} />
          <Form.Text className="d-inline" muted> {task.completed ? "Terminée" : "En cours"}</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">Ajouter</Button>
      </Form>
    </>
  );
}

export default React.memo(NewTaskForm)