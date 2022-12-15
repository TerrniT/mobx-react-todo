import { makeAutoObservable, observable } from 'mobx';
import { getTodos, postTodos } from '../api/api';

export type TodosAPI = {
  id: number | (() => number);
  body?: string;
  completed: boolean | (() => boolean);
};

class TodosStore {
  todos: TodosAPI[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: any) {
    this.todos.push(todo);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  completeTodo(id: number) {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo
    );
  }

  fetchTodos() {
    getTodos().then(json => {
      this.todos = [...this.todos, ...json];
    });
  }
}

export default new TodosStore();
