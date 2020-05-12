import React from 'react'
import PropTypes from 'prop-types'

const Confirm = props => {

  return (
    <>
      <p>Êtes-vous certain de bien vouloir supprimer cette tâche ?</p>
      <button onClick={() => props.confirm()}>Confirmer</button>
      <button onClick={() => props.cancel()}>Annuler</button>
    </>
  )
}

Confirm.propTypes = {

}

export default Confirm
