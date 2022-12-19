import axios from 'axios';
import { makeAutoObservable, observable } from 'mobx';
import { getTodos, postTodos, updateTodo } from '../api/api';

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

  addTodo() {
    // Push => create a new object and spread into array
    //    this.todos.push(todo);
    postTodos(this.todos);
  }

  removeTodo(todo: any) {
    try {
      const response = axios.delete(
        `${process.env.REACT_APP_FAKE_SERVER}/todos/${todo.id}`,
        todo
      );

      this.todos = this.todos.filter(item => item.id !== todo.id);
    } catch (error) {
      console.log(error);
    }
  }

  completeTodo(todo: any) {
    this.todos = this.todos.map(item =>
      item.id === todo.id
        ? {
            ...item,
            completed: !todo.completed,
          }
        : item
    );
    updateTodo({
      ...todo,
      completed: !todo.completed,
    });
  }

  fetchTodos() {
    getTodos().then(json => {
      this.todos = [...this.todos, ...json];
    });
  }
}

export default new TodosStore();
