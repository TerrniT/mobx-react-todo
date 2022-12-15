import React from 'react';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
} from '@chakra-ui/react';
import { DeleteIcon, SettingsIcon } from '@chakra-ui/icons';

const TodoSettings = ({ todoId }) => {
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
          <MenuItem as={Box}></MenuItem>

          <MenuItem as={Box} w="100%" size="sm">
            <DeleteIcon />
            Delete
          </MenuItem>
        </Flex>
      </MenuList>
    </Menu>
  );
};

export default TodoSettings;
