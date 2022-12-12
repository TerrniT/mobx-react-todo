import { action, observable } from 'mobx';
import { getTodos, postTodos } from '../api/api';
import { TodosAPI } from '../types/types';

export class TodosStore {
  @observable todos: TodosAPI[] = [];

  @action
  loadTodos = () => {
    getTodos().then(todos => (this.todos = todos));
  };

  @action
  saveTodos = () => {
    postTodos(this.todos);
  };

  @action
  addTodos = (todo: any) => {
    this.todos.push(todo);
  };
}
