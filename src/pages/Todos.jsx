import { useEffect, useState } from 'react';
import React from 'react';
import {
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue,
  Checkbox,
} from '@chakra-ui/react';

import axios from 'axios';

import TaskItem from '../components/TaskItem';
import { getTodos } from '../api/api';
import { NewTodoInput } from '../components/NewTodoInput';
import { TodosStore } from '../stores/TodosStore';
import { observer } from 'mobx-react';

const { REACT_APP_FAKE_SERVER } = process.env;

const Todos = observer(({ todosStore }) => {
  const scheme = useColorModeValue('purple', 'orange');
  const color = useColorModeValue('gray.800', 'white');

  const [todos, setTodos] = useState([]);

  // TODO: add mobx store and move all api func to api itself
  // TODO: move project to typescript + mobx

  const toggleComplete = async todo => {
    await axios
      .put(`${REACT_APP_FAKE_SERVER}/todos/${todo.id}`, {
        ...todo,
        completed: !todo.completed,
      })
      .then(res => {
        const updatedTodo = todos.map(item => {
          if (item.id !== todo.id) return item;
          return res.data;
        });

        setTodos(updatedTodo);
      });
  };

  useEffect(() => {
    getTodos().then(res => setTodos(res.data));
  }, []);

  return (
    <Flex p={3} display="flex" flexDirection="column">
      <Flex w="310px" alignSelf="center">
        <Flex w="310px" flexDir="column">
          <Flex mt="10%">
            <NewTodoInput todoStore={todosStore} />
          </Flex>

          {/* <AddTodo /> */}
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
                  >
                    <Checkbox
                      colorScheme="green"
                      onChange={() => toggleComplete(todo)}
                    ></Checkbox>
                  </TaskItem>
                ))}
              </TabPanel>
              <TabPanel>
                {TodosStore.todos &&
                  TodosStore.todos.map(todo => (
                    <TaskItem
                      key={todo.id}
                      todoId={todo.id}
                      description={todo.body}
                      status={todo.completed}
                      color={color}
                    >
                      <Checkbox
                        colorScheme="green"
                        onChange={() => toggleComplete(todo)}
                      ></Checkbox>
                    </TaskItem>
                  ))}
              </TabPanel>
              <TabPanel>Complete Todos</TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Flex>
  );
});

export default Todos;
