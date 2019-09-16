import { takeEvery, all, put, delay, select } from 'redux-saga/effects'
import {GET_SINGLE_TASK, getTasks, setSingleTask} from "../actions";
import json from '../../services/tasks';

function* getTask () {
  yield takeEvery(GET_SINGLE_TASK, function*(action){
    const tasks = yield select(state => state.tasks);

    const [singleTask] = tasks.length === 0 ?
      json.filter( task => task.id === +action.id )
      : tasks.filter( task => task.id === +action.id )

    yield delay(1000);
    yield tasks.length === 0 ? put(getTasks(json)) : null
    yield put(setSingleTask(singleTask))
  })
}

export default function* rootSaga() {
  yield all([
    getTask()
  ])
}