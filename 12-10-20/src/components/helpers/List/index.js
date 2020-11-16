import React from 'react'
import ListItem from '../ListItem'
import styles from './List.module.css'

const List = (props) => {
  return (
    <ul className={styles.unstyled}>
      {props.list.map((item) => <ListItem key={item.id} item={item} {...props} />)}
    </ul>
  )
}

export default List
