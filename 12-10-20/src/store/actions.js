export const ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
}

const action = {
  increment: () => ({ type: ACTIONS.INCREMENT }),
  decrement: () => ({ type: ACTIONS.DECREMENT }),
  login: () => ({ type: ACTIONS.LOGIN }),
  logout: () => ({ type: ACTIONS.LOGOUT })
}

export default action