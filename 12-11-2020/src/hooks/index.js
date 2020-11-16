import {useEffect} from 'react'

export const useFetch = (endpoint, setData) => {
  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(todos => setData(todos))
      .catch(error => { throw new Error(error) })
  }, [endpoint])

}