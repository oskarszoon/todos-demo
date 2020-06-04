import React from 'react';
import { useDispatch } from 'react-redux';
import { useInput } from '../hooks/useInput';
import { createTodo } from '../../redux/actions';

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
    <div>
      <input
        type="text"
        placeholder="Add a new todo"
        value={title}
        onChange={setTitleFromEvent}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};
