import { Button, Flex, Input } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { postTodos } from '../api/api';
import useUniqueId from '../hooks/useUniqueId';
import TodosStore from '../stores/TodosStore';

export const NewTodoInput = observer(() => {
  const [title, setTitle] = React.useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('submit');

    const data = {
      id: useUniqueId,
      body: title,
      completed: false,
    };

    try {
      postTodos(data).then(() => TodosStore.fetchTodos());
    } catch (error) {
      console.log(error);
    }

    setTitle('');
  };

  return (
    <Flex mt="10%">
      <form onSubmit={handleSubmit}>
        <Input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Add Todo"
        />
        <Button type="submit" onClick={() => console.log('heelo')}>
          Add
        </Button>
      </form>
    </Flex>
  );
});
