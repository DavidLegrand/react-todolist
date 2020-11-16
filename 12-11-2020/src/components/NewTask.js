import React, { useState, useContext } from 'react'
import Title from './Title'
import Modal from './Modal'
import { UserIdContext } from '../contexts'

const NewTask = ({ addtask }) => {
  const [title, settitle] = useState('')
  const [completed, setcompleted] = useState('false')
  const [userid] = useContext(UserIdContext)


  const handleSubmit = (e) => {
    e.preventDefault()
    if (title !== '') {
      setshowmodal(true)
    }
  }

  const confirm = () => {
    const task = {
      title: title,
      completed: JSON.parse(completed)
    }
    addtask(task)
    settitle('')
    setcompleted('false')
    setshowmodal(false)
  }

  const [showmodal, setshowmodal] = useState(false)
  const modal = showmodal ? (
    <Modal>
      <div className="modal">Êtes-vous sûr de vouloir ajouter cette tâche ?
        <button type="button" onClick={confirm}>Confirmer</button>
        <button type="button" onClick={() => setshowmodal(false)}>Annuler</button>
      </div>
    </Modal >) : null

  return (
    <form onSubmit={handleSubmit}>
      <Title>Nouvelle tâche : {userid}</Title>
      <input required placeholder="Nom de la tâche" type="text" value={title} onChange={(e) => settitle(e.target.value)} />
      <select required value={completed} onChange={(e) => setcompleted(e.target.value)} >
        <option value="false">En cours</option>
        <option value="true">Terminée</option>
      </select>
      <button type="submit">Valider</button>
      {modal}
    </form>
  )
}

export default NewTask
