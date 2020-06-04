import axios from 'axios';
import { todosUrl } from './urls';

export const updateTodo = async (id, changes) => {
  try {
    const response = await axios.put(`${todosUrl}/${parseInt(id, 10)}`, changes);
    console.log({ response });
  } catch (e) {
    console.error(e);
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${todosUrl}/${parseInt(id, 10)}`);
    console.log({ response });
  } catch (e) {
    console.error(e);
  }
};

export const createTodo = async ({ title }) => {
  try {
    const response = await axios.post(`${todosUrl}`, {
      title,
      completed: 0,
    });
    console.log({ response });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
