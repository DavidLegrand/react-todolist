import compteur from './compteur'
import logged from './logged'

import { combineReducers } from 'redux'

const reducers = combineReducers({
  compteur,
  logged
})

export default reducers