import { action, observable } from 'mobx';
import { getTodos, postTodos } from '../api/api';
import useUniqueId from '../hooks/useUniqueId';

export type TodosAPI = {
  id: () => string;
  body: string;
  completed: boolean;
};

export class TodosStore {
  @observable todos: TodosAPI[] = [];
  @action
  loadTodos = () => {
    getTodos().then(res => (this.todos = res.data));
  };

  // @action
  // saveTodos = () => {
  //   postTodos(this.thos);
  // };

  @action
  addTodos = (body: string) => {
    const item: TodosAPI = {
      id: useUniqueId,
      body,
      completed: false,
    };

    //this.todos.push(item);
    //postTodos(this.todos);
    postTodos(item);
  };
}
