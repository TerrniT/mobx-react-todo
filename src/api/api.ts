import axios from 'axios';
import { TodosAPI } from '../stores/TodosStore';
const { REACT_APP_FAKE_SERVER } = process.env;

export const getTodos = async (): Promise<any> => {
  await axios.get(`${REACT_APP_FAKE_SERVER}/todos`);
};

export const postTodos = (todos: TodosAPI) => {
  axios.post(`${REACT_APP_FAKE_SERVER}/todos`, todos);
};
