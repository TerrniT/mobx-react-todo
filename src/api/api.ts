import axios from 'axios';
import { TodosAPI } from '../stores/TodosStore';

const { REACT_APP_FAKE_SERVER } = process.env;

export const getTodos = () => {
  const json = fetch(`${REACT_APP_FAKE_SERVER}/todos`).then(res => res.json());
  return json;
};

export const postTodos = (todos: TodosAPI) => {
  return axios.post(`${REACT_APP_FAKE_SERVER}/todos`, todos);
};
