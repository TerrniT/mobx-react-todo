import { Button, Flex, Input } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { getTodos } from '../api/api';
import { TodosStore } from '../stores/TodosStore';

interface Props {
  todoStore: TodosStore;
}

export const NewTodoInput: React.FC<Props> = observer(({ todoStore }) => {
  const [todo, setTodo] = React.useState('');

  const updateTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const onAddTodoClick = (todo: any) => {
    todoStore.addTodos(todo);
    setTodo('');
  };

  useEffect(() => {
    getTodos().then(res => setTodo(res));
  }, []);

  return (
    <Flex mt="10%">
      <Input
        value={todo}
        onChange={event => setTodo(event.target.value)}
        placeholder="Add Todo"
      />
      <Button onClick={onAddTodoClick(todo)}>Add</Button>
    </Flex>
  );
});
