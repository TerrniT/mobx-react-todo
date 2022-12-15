import { useEffect } from 'react';
import React from 'react';
import {
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue,
  Box,
  HStack,
  Badge,
  Fade,
  Text,
  MenuItem,
  MenuList,
  MenuButton,
  Menu,
} from '@chakra-ui/react';

import todosStore from '../stores/TodosStore';
import { observer } from 'mobx-react-lite';
import { DeleteIcon, EditIcon, SettingsIcon } from '@chakra-ui/icons';
import { NewTodoInput } from '../components/NewTodoInput';

const Todos = observer(() => {
  const scheme = useColorModeValue('purple', 'orange');
  const color = useColorModeValue('gray.800', 'white');



  useEffect(() => {
    todosStore.fetchTodos();
  }, []);

  return (
    <Flex p={3} display="flex" flexDirection="column">
      <Flex w="310px" alignSelf="center">
        <Flex w="310px" flexDir="column">
          <Flex mt="10%">
            <NewTodoInput />
          </Flex>

          <Tabs mt="2%" colorScheme={scheme}>
            <TabList>
              <Tab fontWeight="bold" fontSize={12} w="100%">
                All
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {todosStore.todos.map(todo => (
                  <Box maxW="280px" px={2} my={3} h={10} key={todo.id}>
                    <HStack>
                      {/* <TodoCheckbox todo={todo} /> */}
                      <input
                        required
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => !todo.completed}
                      ></input>
                      <HStack justifyContent="space-between" minW="80%">
                        <Text
                          fontSize="15"
                          color={todo.completed ? '#333' : { color }}
                          noOfLines="1"
                          textAlign="flex-start"
                          textDecoration={
                            todo.completed ? 'line-through' : 'none'
                          }
                          transition="0.2s 0s linear"
                        >
                          {todo.body}
                        </Text>

                        <Fade>
                          <Badge
                            fontSize="0.5em"
                            colorScheme={todo.completed ? 'green' : 'red'}
                          >
                            {todo.completed ? 'Done' : 'Undone'}
                          </Badge>
                        </Fade>
                      </HStack>

                      <Menu>
                        <MenuButton
                          size="xs"
                          py={1}
                          px={2}
                          transition="all 0.2s"
                          borderRadius="md"
                          borderWidth="1px"
                          _hover={{ bg: 'gray.400' }}
                          _expanded={{ bg: '#171717' }}
                          _focus={{ boxShadow: 'outline' }}
                        >
                          <SettingsIcon boxSize="4" />
                        </MenuButton>
                        <MenuList
                          minW="40px"
                          bg="#131313"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Flex flexDir="column" px="1" gap="2">
                            <MenuItem as={Box}>
                              <EditIcon />
                              Edit
                            </MenuItem>

                            <MenuItem
                              as={Box}
                              w="100%"
                              size="sm"
                              onClick={() => todosStore.removeTodo(todo.id)}
                            >
                              <DeleteIcon />
                              Delete
                            </MenuItem>
                          </Flex>
                        </MenuList>
                      </Menu>
                    </HStack>
                  </Box>
                ))}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Flex>
  );
});

export default Todos;
