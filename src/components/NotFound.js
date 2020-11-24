import React from 'react'
import Title from './shared/Title'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <Title>Oh oh !</Title>
      <p className="display-4 text-center">404 Not Found :(</p>
      <p className="text-center">La page demandée n'existe pas.</p>
      <p className="text-center"><Link to='/'>Retour à l'accueil</Link></p>
    </>
  )
}

export default NotFound
