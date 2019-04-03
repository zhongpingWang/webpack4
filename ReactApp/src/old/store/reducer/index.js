import { combineReducers  } from 'redux'

import Count from "./count"
import Todo from "./todo" 


// export default combineReducers({
//     Count,
//     Todo
// });


export default function todoApp(state = {}, action) {
    return {
        Count: Count(state.Count, action),
        Todo: Todo(state.Todo, action)
    };
  }