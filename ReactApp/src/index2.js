import React, { Component } from 'react'
 import ReactDOM from 'react-dom'
 import { Provider, connect } from 'react-redux' 
 import store from "./store/index" 
 import Actions from "./store/actions/index"

 import { bindActionCreators } from 'redux';

 import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function Home() {
  return <h2>Home</h2>;
}



function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}

// React component
class Counter extends Component { 

  render() {
    const { value, onIncreaseClick,ActionsMe } = this.props 
    return (
      <div> 
        <span>{value}</span> 
        <button onClick={ActionsMe.increase2}>Increase</button>
      </div>
    )
  }
}  




 

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.Count.count,
    all:state
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(Actions.increase),
    ActionsMe:bindActionCreators(Actions,dispatch)
  }
}

function About(props) {

  console.log(props);

  return <h2>About</h2>;
}

About =  connect(
  mapStateToProps,
  mapDispatchToProps
)(About) 

class AppRouter extends Component{

  render(){
    return (
      <Router>
        <div>
          <Header />
  
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
  
          <Counter {...this.props} />
        </div>
      </Router>
    );
  }

}






// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter) 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)