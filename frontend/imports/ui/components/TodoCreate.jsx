import React from 'react';
import PropTypes from 'prop-types';
import { createTodo } from '../../api/todos';
import { useInput } from '../hooks/useInput';

export const TodoCreate = ({
  onCreate,
}) => {
  const [title, setTitleFromEvent, setTitle] = useInput('');

  const onBlur = async () => {
    if (typeof title !== 'string' || !title.length) {
      return;
    }
    const todo = await createTodo({
      title,
    });
    onCreate(todo);
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

TodoCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

TodoCreate.defaultProps = {
};
