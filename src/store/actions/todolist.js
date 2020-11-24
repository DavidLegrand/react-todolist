export const fetchTasksBegin = () => ({
  type: 'FETCH_TASKS_BEGIN'
});

export const fetchTasksSuccess = list => ({
  type: 'FETCH_TASKS_SUCCESS',
  payload: list
});

export const fetchTasksFailure = error => ({
  type: 'FETCH_TASKS_FAILURE',
  payload: error
});


const fetchTasks = (dispatch, getState) => {
  dispatch(fetchTasksBegin())
  fetch(`https://todolist-react-7495e.firebaseio.com/tasks.json`)
    .then(res => {
      if (!res.ok) throw new Error(res.status)
      return res
    })
    .then(res => res.json())
    .then(data => dispatch(fetchTasksSuccess(data)))
    .catch(err => dispatch(fetchTasksFailure(err)))
}

export default fetchTasks