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

export const updateTaskBegin = () => ({
  type: 'UPDATE_TASK_BEGIN'
});

export const updateTaskSuccess = task => ({
  type: 'UPDATE_TASK_SUCCESS',
  payload: task
});

export const updateTaskFailure = error => ({
  type: 'UPDATE_TASK_FAILURE',
  payload: error
});

export const postTaskBegin = () => ({
  type: 'POST_TASK_BEGIN'
});

export const postTaskSuccess = () => ({
  type: 'POST_TASK_SUCCESS',
});

export const postTaskFailure = error => ({
  type: 'POST_TASK_FAILURE',
  payload: error
});


const ROOT_URL = 'https://todolist-react-7495e.firebaseio.com/';

export const fetchTasks = (dispatch, getState) => {
  dispatch(fetchTasksBegin())
  fetch(`${ROOT_URL}tasks.json`)
    .then(res => {
      if (!res.ok) throw new Error(res.statusText)
      return res
    })
    .then(res => res.json())
    .then(data => { console.log(data); return Object.keys(data).map(k => { return { ...data[k], _id: k } }).filter(i => i !== null) })
    .then(filtered => dispatch(fetchTasksSuccess(filtered)))
    .catch(err => dispatch(fetchTasksFailure(err)))
}



export const updateTask = payload => {
  return (dispatch, getState) => {
    const options = {
      method: 'PATCH',
      mode: 'cors',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    }
    dispatch(updateTaskBegin())
    fetch(`${ROOT_URL}tasks/${payload._id}.json`, options)
      .then(res => {
        if (!res.ok) throw new Error(res.statusText)
        return res
      })
      .then(res => res.json())
      .then(data => dispatch(updateTaskSuccess(data)))
      .catch(err => { console.log(err); dispatch(updateTaskFailure(err)) })
  }
}

export const postTask = payload => {
  return (dispatch, getState) => {
    const options = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    }
    dispatch(postTaskBegin())
    fetch(`${ROOT_URL}tasks.json`, options)
      .then(res => {
        if (!res.ok) throw new Error(res.statusText)
        return res
      })
      .then(() => dispatch(postTaskSuccess()))
      .catch(err => dispatch(postTaskFailure(err)))
  }
}