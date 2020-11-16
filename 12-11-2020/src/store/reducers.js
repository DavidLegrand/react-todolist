import { combineReducers } from "redux"

// State initial
const initialState = {
  counter: 0,
  isAuth: false
}

const counterReducer = (state = initialState.counter, action) => {
  switch (action.type) {
    case 'INCREMENT':
    case 'DECREMENT':
      return state + action.payload
    default:
      return state
  }
}

const authReducer = (state = initialState.isAuth, action) => {
  switch (action.type) {
    case 'LOGIN':
      return true
    case 'LOGOUT':
      return false
    default:
      return state
  }
}

const rootReducer = combineReducers({
  counter: counterReducer,
  isAuth: authReducer
})
export default rootReducer