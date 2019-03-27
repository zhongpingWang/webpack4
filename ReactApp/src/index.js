import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/default'; 

import RouteConfigExample from "./components/routeConfig"
import ParamsExample from "./components/ParamsExample"
import AuthExample from "./components/AuthExample"

ReactDOM.render(
    <AuthExample/>,
  document.getElementById("app")
);