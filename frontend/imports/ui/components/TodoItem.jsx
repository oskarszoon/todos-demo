import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames';

import { updateTodo, deleteTodo } from '../../redux/actions';

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleCompleted = () => {
    dispatch(updateTodo(todo.id, {
      completed: +!todo.completed,
    }));
  };

  const onBlur = (event) => {
    dispatch(updateTodo(todo.id, {
      title: event.target.value,
    }));
  };

  const deleteItem = () => {
    dispatch(deleteTodo(todo.id));
  };

  const itemClassNames = classNames(
    'todo-item', 'd-flex', 'align-items-center',
    {
      'todo-item--complete': todo.completed,
    },
  );
  return (
    <div className={itemClassNames}>
      <div className="todo-item__completed">
        <FontAwesomeIcon
          icon={todo.completed ? faCheckSquare : faSquare}
          onClick={toggleCompleted}
        />
      </div>
      <div className="todo-item__title">
        <input
          type="text"
          className="form-control w-100"
          defaultValue={todo.title}
          onBlur={onBlur}
        />
      </div>
      <div className="todo-item__delete">
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={deleteItem}
        />
      </div>
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
