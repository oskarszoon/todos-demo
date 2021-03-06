import React from 'react';
import { useSelector } from 'react-redux';

import { ListGroup, ListGroupItem } from 'reactstrap';
import { TodoItem } from './TodoItem';
import { TodoCreate } from './TodoCreate';
import { LoadingIndicator } from './LoadingIndicator';

export const TodosList = () => {
  const todos = useSelector((state) => { return state.todos; });
  const loading = useSelector((state) => { return state.loading; });

  let content = <LoadingIndicator />;
  if (!loading) {
    content = (
      <ListGroup>
        <ListGroupItem>
          <TodoCreate />
        </ListGroupItem>
        {todos.map((todo) => {
          return (
            <ListGroupItem key={todo.id}>
              <TodoItem todo={todo} />
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  }

  return (
    <div>
      {content}
    </div>
  );
};
