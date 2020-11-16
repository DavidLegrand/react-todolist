import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import reducer from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducer)

export default () => {
  let store = createStore(persistedReducer,
    composeWithDevTools(applyMiddleware(logger)))
  let persistor = persistStore(store)
  return { store, persistor }
}
