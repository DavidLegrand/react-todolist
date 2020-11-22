import { useEffect, useState, useRef } from 'react'

const usePut = async (endpoint, data) => {
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
      /* const res = await fetch(endpoint, options);
      const json = await res.json();*/
      console.log("data sent", data)
      setIsLoading(false)
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [data]);

  return { error, isLoading };
}



const useFetch = async (endpoint, setData) => {

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(endpoint);
      const json = await res.json();
      setData(json);
      setIsLoading(false)
      if (res.ok) { console.log("data fetched", json) }
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