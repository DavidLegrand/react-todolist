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
    if (isDataFetched.current)
      fetchData();
  }, [data]);

  return { error, isLoading };
}



const useFetch = async (endpoint, setData, isDataFetched) => {

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      setData(Object.keys(data).map(k => data[k]).filter(i => i !== null));
      setIsLoading(false)
      if (res.ok) { console.log("data fetched", data); isDataFetched.current = true }
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { error, isLoading };
};


export { useFetch, usePut }