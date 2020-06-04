import { createAction } from 'redux-api-middleware';
import { todosUrl } from './apiUrls';

const headers = { 'Content-Type': 'application/json' };

export const loadTodos = createAction({
  endpoint: todosUrl,
  method: 'GET',
  headers,
  types: ['load/request', 'load/success', 'load/failed'],
});

export const createTodo = ({ title = '' }) => {
  return createAction({
    endpoint: todosUrl,
    method: 'POST',
    headers,
    body: () => {
      return JSON.stringify({
        title,
        completed: 0,
      });
    },
    types: ['todo/create/request', 'todo/create/success', 'todo/create/failed'],
  });
};

export const updateTodo = (id, changes) => {
  return createAction({
    endpoint: `${todosUrl}/${parseInt(id, 10)}`,
    method: 'PUT',
    headers,
    body: () => {
      return JSON.stringify(changes);
    },
    types: [{
      type: 'todo/update/request',
      payload: () => {
        return {
          id,
          changes,
        };
      },
    }, 'todo/update/success', 'todo/update/failed'],
  });
};

export const deleteTodo = (id) => {
  return createAction({
    endpoint: `${todosUrl}/${parseInt(id, 10)}`,
    method: 'DELETE',
    headers,
    types: [{
      type: 'todo/delete/request',
      payload: () => {
        return {
          id,
        };
      },
    }, 'todo/delete/success', 'todo/delete/failed'],
  });
};
