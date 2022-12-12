import React, { useEffect, useState } from 'react';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Button,
  Box,
} from '@chakra-ui/react';
import { DeleteIcon, SettingsIcon } from '@chakra-ui/icons';
import axios from 'axios';
import UpdateTodo from '../components/UpdateTodo';

const { REACT_APP_FAKE_SERVER } = process.env;

const TodoSettings = ({ todoId }) => {
  const [loading, setLoading] = useState(true);
  const handleDelete = todoId => {
    axios
      .delete(`${REACT_APP_FAKE_SERVER}/todos/${todoId}`)
      .then(setLoading(prev => !prev));
  };

  return (
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
            <UpdateTodo />
          </MenuItem>

          <MenuItem
            as={Box}
            w="100%"
            size="sm"
            onClick={() => handleDelete(todoId)}
          >
            <DeleteIcon />
            Delete
          </MenuItem>
        </Flex>
      </MenuList>
    </Menu>
  );
};

export default TodoSettings;
