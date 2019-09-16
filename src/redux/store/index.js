import {createStore, applyMiddleware } from "redux";
import {reducers} from '../reducers';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../root-saga'

const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);