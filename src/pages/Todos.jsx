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

const Todos = () => {

  const modes = useColorModeValue('purple.400', 'orange.300');
  const scheme = useColorModeValue('purple', 'orange');
  const color = useColorModeValue('gray.800', 'white');

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem('tasks')) || []
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = e => {
    e.preventDefault();

    if (newTask.length > 0) {
      setTasks(prevState => [
        ...prevState,
        { text: newTask, newTask, isChecked: false },
      ]);
      setNewTask('');
    }
  };

  const updateTask = (index, checked) => {
    let newTasks = [...tasks];
    newTasks[index].isChecked = checked;
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <Flex p={3} display="flex" flexDirection="column">
      <Flex w="325px" alignSelf="center">
        <Flex w="325px" flexDir="column">
          <form onSubmit={addTask}>
            <Flex mt="10%">
              <Input
                focusBorderColor={modes}
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
                placeholder="Add task"
              />
              <Button color={color} onClick={addTask} ml={5} bg={modes}>
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
                {tasks.map((task, index) => (
                  <TaskItem
                    removeTask={removeTask}
                    updateTask={updateTask}
                    key={index}
                    task={task}
                    index={index}
                  />
                ))}
              </TabPanel>
              <TabPanel>
                {tasks.map((task, index) =>
                  !task.isChecked ? (
                    <TaskItem
                      removeTask={removeTask}
                      updateTask={updateTask}
                      key={index}
                      task={task}
                      index={index}
                    />
                  ) : null
                )}
              </TabPanel>
              <TabPanel>
                {tasks.map((task, index) =>
                  task.isChecked ? (
                    <TaskItem
                      removeTask={removeTask}
                      updateTask={updateTask}
                      key={index}
                      task={task}
                      index={index}
                    />
                  ) : null
                )}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Todos
