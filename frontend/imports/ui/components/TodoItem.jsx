import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { deleteTodo, updateTodo } from '../../api/todos';

export const TodoItem = ({
  todo: todoProp,
  onDelete,
}) => {
  const [todo, updateTodoState] = useState(todoProp);

  // Update state if todo from props changes (i.e. data reload)
  useEffect(() => {
    updateTodoState(todoProp);
  }, [todoProp]);

  const setCompletedStatus = (event) => {
    const changes = {
      completed: event.target.checked,
    };
    // Should be combined into a separate hook that handles both
    updateTodoState(changes);
    updateTodo(todo.id, changes);
  };

  const onBlur = (event) => {
    updateTodo(todo.id, {
      title: event.target.value,
    });
  };

  const deleteItem = () => {
    onDelete(todo.id);
    deleteTodo(todo.id);
  };

  return (
    <div>
      <label className="checkbox" htmlFor={todo.id}>
        <input
          id={todo.id}
          type="checkbox"
          checked={todo.completed}
          name="checked"
          onChange={setCompletedStatus}
        />
      </label>
      <input
        type="text"
        defaultValue={todo.title}
        onBlur={onBlur}
      />
      <a
        className="delete-item"
        href="#delete"
        onClick={deleteItem}
      >
        X
      </a>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
};
