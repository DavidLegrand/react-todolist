import React from 'react'
import { Form } from 'react-bootstrap'

const ToDoListFilter = ({ setFilter }) => {

  return (
    <Form.Control as="select" onChange={(e) => setFilter(e.target.value)}>
      <option value='all' default>Tout afficher</option>
      <option value={true}>Terminées</option>
      <option value={false}>En cours</option>
    </Form.Control>
  )
}

export default React.memo(ToDoListFilter)
