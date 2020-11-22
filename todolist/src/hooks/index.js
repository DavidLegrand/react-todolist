import { useEffect, useState } from 'react'

// useEffect(() => {
//   const sendData = () => {
//     const options = {
//       method: 'PUT',
//       mode: 'cors',
//       body: JSON.stringify(list),
//       headers: { 'Content-Type': 'application/json' },
//     }
//     fetch(endpoint, options)
//       .then(response => { if (response.ok) console.log('data sent to server'); return response.json() })
//       .catch(error => console.error(error))
//   }
//   if (loading === false && list.length > 0)
//     sendData()
// }, [list, endpoint])

const usePutList = (endpoint, list) => {
  const options = {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify(list),
    headers: { 'Content-Type': 'application/json' },
  }

  useFetch(endpoint, options)
    .then(res => { console.log("LIST from PUT", list); console.log('data sent to server', res, res.ok) })
}

const useGetList = (endpoint, list, setlist, Model = null) => {
  useFetch(endpoint, {})
    .then(res => {
      if (!list)
        setlist(res.data.map(e => Model ? Object.assign(new Model(), e) : e))
      console.log("LIST from GET", list)
    })
    .catch(error => console.error(error))
}

const useFetch = async (endpoint, options = {}) => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const result = { data, error, isLoading }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (!data) {
          const res = await fetch(endpoint, options);
          const json = await res.json();
          setData(json);
          setIsLoading(false)
          console.log("on entre ici", json)
        }

      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return new Promise((resolve, reject) => {
    if (error) reject(error)
    else if (!isLoading && data) resolve(result)
  });
};


export { useFetch, useGetList, usePutList }