// Action creator

const actions = {
  increment: (value = 1) => ({ type: 'INCREMENT', payload: value }),
  decrement: (value = -1) => ({ type: 'DECREMENT', payload: value }),
  login: () => ({ type: 'LOGIN' }),
  logout: () => ({ type: 'LOGOUT' }),
}

export default actions