import React from 'react'
import {useTitle} from '../../hooks'

const Title = props => {
  useTitle(props.children)
  return (
    <h1 className="display-3 text-center">{props.children}</h1>
  )
}

export default Title
