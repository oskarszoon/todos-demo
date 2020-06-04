import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../../redux/actions';

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const setCompletedStatus = (event) => {
    const changes = {
      completed: event.target.checked,
    };
    dispatch(updateTodo(todo.id, changes));
  };

  const onBlur = (event) => {
    dispatch(updateTodo(todo.id, {
      title: event.target.value,
    }));
  };

  const deleteItem = () => {
    dispatch(deleteTodo(todo.id));
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
};

TodoItem.defaultProps = {
};
