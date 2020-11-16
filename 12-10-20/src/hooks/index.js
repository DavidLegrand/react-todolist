import { useEffect, useCallback } from 'react'


export const useFetch = (endpoint, setter) => {
  useEffect(() => {
    async function fetchData() {
      const result = await fetch(endpoint);
      const json = await result.json();
      setter(json);
    }
    fetchData();
  }, [endpoint, setter])
}

export const useAddItem = (item, list, setter) => {
  useCallback(() => {
    setter([...list, item])
  }, [item, list, setter])
}