const initialState = {
  isLogged: false,
  user: {},
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return { ...state, isLogged: true, userId: action.payload }
    case 'USER_LOGOUT':
      return { ...state, isLogged: false, user: null }
    default:
      return state
  }
}

export default user