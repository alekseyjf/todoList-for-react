export const GET_TASKS = 'GET_TASKS';
export const GET_SINGLE_TASK = 'GET_SINGLE_TASK';
export const SET_SINGLE_TASK = 'SET_SINGLE_TASK';
export const UPDATE_TASKS = 'UPDATE_TASKS';

export const getTasks = tasks => ({
  type: GET_TASKS,
  tasks
});

export const getSingleTask = id => ({
    type: GET_SINGLE_TASK,
    id
});
export const setSingleTask = singleTask => ({
    type: SET_SINGLE_TASK,
    singleTask
})
export const updateTasks = tasks => {
  return {
    type: UPDATE_TASKS,
    tasks
  }
};