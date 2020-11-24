import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import todolist from './reducers/todolist'
import user from './reducers/user'
import thunk from 'redux-thunk'

const middlewares = composeWithDevTools(applyMiddleware(thunk))
const rootReducer = combineReducers({ todolist, user })

const store = createStore(rootReducer, middlewares)

export default store