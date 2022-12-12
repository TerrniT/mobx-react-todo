import axios from 'axios';
import { TodosAPI } from '../types/types';
const { REACT_APP_FAKE_SERVER } = process.env;

export const getTodos = (): Promise<any> => {
  return axios.get(`${REACT_APP_FAKE_SERVER}/todos`);
};

export const postTodos = (todos: TodosAPI[]) => {
  axios.post(`${REACT_APP_FAKE_SERVER}/todos`, todos);
};
