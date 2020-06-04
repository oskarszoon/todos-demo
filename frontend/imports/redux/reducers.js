import { combineReducers } from 'redux';

const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case 'load/success':
      return false;
    default:
      return state;
  }
};

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'load/success':
      return action.payload;
    case 'todo/create/success':
      return [action.payload, ...state];
    case 'todo/update/request':
      // optimistic UI, the call to the API could fail, something to consider in the future
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload.changes };
        }
        return todo;
      });
    case 'todo/delete/request':
      // optimistic UI, the call to the API could fail, something to consider in the future
      return state.filter((todo) => { return todo.id !== action.payload.id; });
    default:
      return state;
  }
};

export default combineReducers({
  loading: loadingReducer,
  todos: todoReducer,
});
