import {UPDATE_TASKS, GET_SINGLE_TASK, GET_TASKS, SET_SINGLE_TASK} from "../actions";

const initialState = {
  tasks: [],
  singleTask: {},
  loaded: false
};

export const reducers = (state = initialState, action) => {
  switch(action.type) {
    case SET_SINGLE_TASK :
      return {
        ...state,
        singleTask: action.singleTask,
        loaded: true
      };
    case GET_SINGLE_TASK :
      return {
        ...state,
        singleTask: {},
        loaded: false
      };
    case GET_TASKS :
      return {
        ...state,
        tasks: action.tasks
      };
    case UPDATE_TASKS :
      return {
        ...state,
        tasks: action.tasks
      };
    default:
      return state
  }
};