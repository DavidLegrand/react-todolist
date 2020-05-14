// REDUCER
const compteur = (state = 0, action) => {
  if (action.type === 'INCREMENTE')
    return state + action.payload
  else if (action.type === 'DECREMENTE')
    return state - action.payload
  else
    return state
}

export default compteur