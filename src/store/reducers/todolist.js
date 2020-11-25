const initialState = {
  list: [],
  loading: false,
  updateloading: false,
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
    case 'UPDATE_TASK_BEGIN':
      return { ...state, error: null, updateloading: true }
    case 'UPDATE_TASK_SUCCESS':
      return { ...state, updateloading: false, list: state.list.map(i => i.id !== action.payload.id ? i : action.payload) }
    case 'UPDATE_TASK_FAILURE':
      return { ...state, updateloading: false, error: action.payload }
    case 'POST_TASK_BEGIN':
      return { ...state, error: null }
    case 'POST_TASK_SUCCESS':
      return state
    case 'POST_TASK_FAILURE':
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export default todolist