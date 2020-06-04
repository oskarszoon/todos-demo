import { useState } from 'react';

// https://github.com/robcalcroft/react-use-input
export const useInput = (initialState = '', valueKey = 'value') => {
  const [value, setValue] = useState(initialState);

  function setValueFromEvent(event) {
    setValue(event.target[valueKey]);
  }

  return [value, setValueFromEvent, setValue];
};
