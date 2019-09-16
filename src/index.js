import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {BrowserRouter as Router} from "react-router-dom";

import App from './containers/app'


ReactDom.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
  , document.getElementById('root'));