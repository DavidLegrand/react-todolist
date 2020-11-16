import { ACTIONS } from './actions'
import { combineReducers } from 'redux'

const initialState = {
  counter: 0,
  isLogged: false
}

const counterReducer = (state = initialState.counter, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return state + 1
    case ACTIONS.DECREMENT:
      return state - 1
    default:
      return state
  }
}

const loginReducer = (state = initialState.isLogged, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return true
    case ACTIONS.LOGOUT:
      return false
    default:
      return state
  }
}

const reducer = combineReducers({ isLogged: loginReducer, counter: counterReducer })
export default reducer