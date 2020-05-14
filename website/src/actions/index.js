// ACTION
export const incremente = (n = 1) => {
  return {
    type: 'INCREMENTE',
    payload: n
  }
}
export const decremente = (n = 1) => {
  return {
    type: 'DECREMENTE',
    payload: n
  }
}
export const login = () => {
  return {
    type: 'LOGIN'
  }
}
export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}