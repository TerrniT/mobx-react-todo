import { DeleteIcon } from '@chakra-ui/icons';
import { Flex, Text, Checkbox, IconButton, HStack, Badge } from '@chakra-ui/react';
import TodoSettings from '../atoms/TodoSettings';

const TodoItem = () => {
  <Flex
    w="250px"
    h="100%"
    alignItems="center" >
    <Checkbox
      colorScheme="green"
      w="250px"
      flexDir="row"
    >
      <Flex w="320px" flexDir="row">
        <Text color="black" alignSelf="center">
          Title
          <Text color="black" as="s" alignSelf="center">
          </Text>
          Status
          <Badge>Complete</Badge>
        </Text>
      </Flex>
    </Checkbox>

    <HStack>
      <TodoSettings />
    </HStack>

    <Button size="sm">
      <DeleteIcon />
    </Button>

    <Button size="sm">
      <DeleteIcon />
    </Button>
  </Flex>
}

export default TodoItem
