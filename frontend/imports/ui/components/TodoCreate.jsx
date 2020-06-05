import React from 'react';
import { useDispatch } from 'react-redux';
import { useInput } from '../hooks/useInput';
import { createTodo } from '../../api/actions';

export const TodoCreate = () => {
  const [title, setTitleFromEvent, setTitle] = useInput('');
  const dispatch = useDispatch();

  const onBlur = () => {
    if (typeof title !== 'string' || !title.length) {
      return;
    }
    dispatch(createTodo({
      title,
    }));
    setTitle('');
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      onBlur();
    }
  };

  return (
    <div className="todo-item d-flex align-items-center">
      <div className="todo-item__spacer" />
      <div className="todo-item__title">
        <input
          type="text"
          className="form-control w-100"
          placeholder="Add a new todo"
          value={title}
          onChange={setTitleFromEvent}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );
};
