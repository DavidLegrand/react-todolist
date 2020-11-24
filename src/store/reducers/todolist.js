const initialState = {
  list: [],
  loading: false,
  error: null
}

const todolist = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TASKS_BEGIN':
      return { ...state, loading: true, error: null }
    case 'FETCH_TASKS_SUCCESS':
      return { ...state, loading: false, list: action.payload }
    case 'FETCH_TASKS_FAILURE':
      return { ...state, loading: false, error: action.payload, list: [] }
    default:
      return state
  }
}

export default todolist