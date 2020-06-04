import React from 'react';
import { todosUrl } from '../../api/urls';
import { useFetch } from '../hooks/useFetch';

export const TodosList = () => {
  const { loading, data } = useFetch(
    todosUrl,
    [],
  );
  console.log({
    loading, data,
  });

  const loadingIndicator = (
    <div>Loading</div>
  );
  let content = loadingIndicator;
  if (!loading) {
    content = (
      <>
        {data.map((todo) => {
          return (
            <div key={todo.id}>{todo.title}</div>
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
