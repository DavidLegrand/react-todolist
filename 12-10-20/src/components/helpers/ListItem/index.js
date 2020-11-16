import React from 'react'

const ListItem = (props) => {

  return (
    <li>{React.cloneElement(props.children, { ...props })}</li>
  )
}


export default ListItem
