import React from 'react';
import { todosUrl } from '../../api/urls';
import { useFetch } from '../hooks/useFetch';
import { TodoItem } from './TodoItem';
import { TodoCreate } from './TodoCreate';

export const TodosList = () => {
  const { loading, data, setData } = useFetch(
    todosUrl,
    [],
  );

  const removeTodoFromState = (id) => {
    setData(data.filter((todo) => {
      return todo.id !== id;
    }));
  };

  const addTodoToState = (todo) => {
    setData([...data, todo]);
  };

  let content = (
    <div>Loading</div>
  );
  if (!loading) {
    content = (
      <>
        <TodoCreate onCreate={addTodoToState} />
        {data.map((todo) => {
          return (
            <TodoItem key={todo.id} todo={todo} onDelete={removeTodoFromState} />
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
