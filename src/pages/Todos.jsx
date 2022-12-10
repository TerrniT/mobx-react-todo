import { useEffect, useState } from 'react';
import React from 'react';
import {
  Flex,
  Input,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue,
  Select,
} from '@chakra-ui/react';

import axios from 'axios';

import TaskItem from '../components/TaskItem';
import useUniqueId from '../hooks/useUniqueId';

const { REACT_APP_FAKE_SERVER } = process.env;

const Todos = () => {
  const modes = useColorModeValue('purple.400', 'orange.300');
  const scheme = useColorModeValue('purple', 'orange');
  const color = useColorModeValue('gray.800', 'white');

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [todoDone, setTodoDone] = useState(true);

  // TODO: add mobx store and move all api func to api itself
  // TODO: move project to typescript + mobx

  const getTodos = () => {
    axios.get(`${REACT_APP_FAKE_SERVER}/todos`).then(res => setTodos(res.data));
  };

  const handleNewTodo = event => {
    event.preventDefault();
    if (!newTodo) return;

    const data = {
      id: useUniqueId,
      body: newTodo,
      completed: todoDone,
    };

    axios
      .post(`${REACT_APP_FAKE_SERVER}/todos`, data)
      .then(res => setTodos([...todos, res.data]));

    setNewTodo('');
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Flex p={3} display="flex" flexDirection="column">
      <Flex w="310px" alignSelf="center">
        <Flex w="310px" flexDir="column">
          <form onSubmit={handleNewTodo}>
            <Flex mt="10%">
              <Input
                focusBorderColor={modes}
                value={newTodo}
                onChange={event => setNewTodo(event.target.value)}
                placeholder="Add Todo"
              />
              <Button
                color={color}
                onClick={handleNewTodo}
                ml={5}
                p={4}
                size="xs"
                bg={modes}
              >
                Add Task
              </Button>
            </Flex>
          </form>
          <Tabs mt="2%" colorScheme={scheme}>
            <TabList>
              <Tab fontWeight="bold" fontSize={12} w="100%">
                All
              </Tab>
              <Tab fontWeight="bold" fontSize={12}>
                Done
              </Tab>
              <Tab fontWeight="bold" fontSize={12}>
                Undone
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {todos.map(todo => (
                  <TaskItem
                    key={todo.id}
                    todoId={todo.id}
                    description={todo.body}
                    status={todo.completed}
                    color={color}
                  />
                ))}
              </TabPanel>
              <TabPanel>InComplete Todos</TabPanel>
              <TabPanel>Complete Todos</TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Todos;
