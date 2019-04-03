import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/default'; 

import RouteConfigExample from "./components/routeConfig"
import ParamsExample from "./components/ParamsExample"
import AuthExample from "./components/AuthExample"

import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);