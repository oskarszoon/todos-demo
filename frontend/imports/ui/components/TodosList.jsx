import React from 'react';
import { useSelector } from 'react-redux';

import { TodoItem } from './TodoItem';
import { TodoCreate } from './TodoCreate';

export const TodosList = () => {
  const todos = useSelector((state) => { return state.todos; });
  const loading = useSelector((state) => { return state.loading; });

  let content = (
    <div>Loading</div>
  );
  if (!loading) {
    content = (
      <>
        <TodoCreate />
        {todos.map((todo) => {
          return (
            <TodoItem key={todo.id} todo={todo} />
          );
        })}
      </>
    );
  }

  return (
    <div>
      <h1>Todos list</h1>
      {content}
    </div>
  );
};
