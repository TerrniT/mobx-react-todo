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
} from '@chakra-ui/react';

import TaskItem from '../components/TaskItem';

const { REACT_APP_FAKE_SERVER } = process.env;

const Todos = () => {
  const modes = useColorModeValue('purple.400', 'orange.300');
  const scheme = useColorModeValue('purple', 'orange');
  const color = useColorModeValue('gray.800', 'white');

  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    fetch(`${REACT_APP_FAKE_SERVER}/todos`)
      .then(res => res.json())
      .then(res => setTodos(res));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Flex p={3} display="flex" flexDirection="column">
      <Flex w="325px" alignSelf="center">
        <Flex w="325px" flexDir="column">
          <form
          //onSubmit={()}
          >
            <Flex mt="10%">
              <Input
                focusBorderColor={modes}
                // value={newTask}
                // onChange={e => setNewTask(e.target.value)}
                placeholder="Add task"
              />
              <Button
                color={color}
                //onClick={addTask}
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
              <Tab fontWeight="bold" fontSize={12}>
                All
              </Tab>
              <Tab fontWeight="bold" fontSize={12}>
                Incomplete Tasks
              </Tab>
              <Tab fontWeight="bold" fontSize={12}>
                Completed Tasks
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {todos.map(todo => (
                  <TaskItem
                    key={todo.id}
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
