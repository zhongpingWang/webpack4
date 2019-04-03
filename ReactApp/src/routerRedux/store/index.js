 

import reducers from "./reducer/index" 

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';//引入异步中间件 
 

const middleware = []; 
middleware.push(thunk);


const reduxEnhancers = compose(
    applyMiddleware(...middleware)
); 


export default createStore(reducers, {}, reduxEnhancers);