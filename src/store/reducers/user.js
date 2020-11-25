const initialState = {
  isLogged: false,
  id: {},
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return { ...state, isLogged: true, id: action.payload }
    case 'USER_LOGOUT':
      return { ...state, isLogged: false, id: null }
    default:
      return state
  }
}

export default user