import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import actions from "../store/actions/index"

// React component
@connect(mapStateToProps,mapDispatchToProps)
export default class Topics extends Component { 

    render() {

        const { value, onIncreaseClick,Actions} = this.props 
        return (<div> 
                   <div>Topics</div>
                <span>{value}</span> 
                <button onClick={Actions.increaseAsync}>increaseAsync</button>
                <button onClick={onIncreaseClick}>Increase</button>
              </div>);
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
      onIncreaseClick: () => dispatch(actions.increase),
      Actions:bindActionCreators(actions,dispatch)
    }
  }
  

  //export default connect(mapStateToProps,mapDispatchToProps)(Topics);