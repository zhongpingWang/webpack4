import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Topics from "./Topics"

import "./css/index.less"


// React component
class App extends Component { 

    render() {
    
      return (
        <Router>
        <div>
          <Header /> 
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} /> 
          </Switch>
        </div>
      </Router>
      )
    }
  }  
  


  export default App;