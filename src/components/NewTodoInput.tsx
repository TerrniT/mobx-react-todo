import { Button, Flex, Input } from '@chakra-ui/react';
import React from 'react';
import { TodosStore } from '../stores/TodosStore';

type Props = {
  addTodo: TodosStore['addTodos'];
};

export const NewTodoInput: React.FC<Props> = ({ addTodo }) => {
  const [todo, setTodo] = React.useState('');

  const updateTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const onAddTodoClick = () => {
    addTodo(todo);
    setTodo('');
  };

  return (
    <Flex mt="10%">
      <Input value={todo} onChange={updateTodo} placeholder="Add Todo" />
      <Button onClick={onAddTodoClick}></Button>
    </Flex>
  );
};
