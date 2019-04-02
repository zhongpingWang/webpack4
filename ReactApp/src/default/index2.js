import React, { Component } from 'react'
 import ReactDOM from 'react-dom'
 import { Provider, connect } from 'react-redux'

 import store from "./store/index"

 import Actions from "./store/actions/index"

// React component
class Counter extends Component { 

  render() {
    const { value, onIncreaseClick,all } = this.props
    return (
      <div> 
        <span>{value}</span> 
        <button onClick={onIncreaseClick}>Increase</button>
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
    onIncreaseClick: () => dispatch(Actions.increase)
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter) 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)