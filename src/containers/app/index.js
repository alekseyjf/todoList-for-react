import React from 'react';
import TodoList from "../todo-list";
import SingleTask from "../../containers/todo-list-single-task";
import {Route, Switch} from "react-router-dom";
import './index.css';

const conf = [
  {
    id: 0,
    path: '/',
    component: TodoList,
    exact: true,
  },
  {
    id: 1,
    path: '/task/:id',
    component: SingleTask,
    exact: false,
  },
]

const App = () => {
  return (
    <div>
      <Switch>
        {conf.map(conf => {
          return (
            <Route
              key={conf.id}
              path={conf.path}
              component={conf.component}
              exact={conf.exact}
            />
          )
        })}
      </Switch>
    </div>
  )
}
export default App;