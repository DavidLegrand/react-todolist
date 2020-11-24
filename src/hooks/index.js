import { useEffect, useState } from 'react'

const usePut = async (endpoint, data, isDataFetched) => {
  const options = {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(endpoint, options);
      //const json = await res.json();
      if (res.ok)
        console.log("data sent", data)
      setIsLoading(false)
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    if (isDataFetched.current && data !== null)
      fetchData();
  }, [data]);

  return { error, isLoading };
}



const useTitle = title => {
  useEffect(() => { document.title = title }, [title])
}

export { usePut, useTitle }