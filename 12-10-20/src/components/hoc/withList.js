import React, { useState, useCallback, useContext } from 'react'
import { UserIdContext } from '../../contexts/UserId'
import { useFetch } from '../../hooks'

const withList = (WrappedComponent, endpoint) => {
  return (props) => {

    const { userId } = useContext(UserIdContext)
    const uri = `${endpoint}${userId}`

    const [list, setList] = useState([])
    useFetch(uri, setList);

    const updateList = useCallback((newItem) => {
      const index = list.findIndex(e => e.id === newItem.id)
      let newlist = [...list]
      newlist[index] = { ...newItem }
      setList(newlist);
    }, [list])

    const addItem = useCallback((item) => {
      const newId = Math.max(...list.map(t => t.id)) + 1
      let newItem = { id: newId, ...item };
      setList([...list, newItem])
    }, [list])

    const removeItem = useCallback((item) => {
      let newList = list.filter((t) => t !== item);
      setList(newList);
    }, [list])

    return <WrappedComponent {...props} list={list} updateList={updateList} addItem={addItem} removeItem={removeItem} />
  }
}

export default withList
