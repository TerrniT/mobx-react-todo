import {
  Text,
  Checkbox,
  HStack,
  Container,
  Badge,
  Box,
} from '@chakra-ui/react';
import TodoSettings from '../atoms/TodoSettings';

const TaskItem = ({ title, description, status, todoId, color }) => {
  return (
    <Box maxW="280px" px={2} my={3} h={10}>
      <HStack>
        <Checkbox colorScheme="green"></Checkbox>

        <HStack justifyContent="space-between" minW="80%">
          <Text
            fontSize="15"
            color={color}
            noOfLines="1"
            textAlign="flex-start"
          >
            {description}
          </Text>
          {status ? (
            <Badge fontSize="0.5em" colorScheme="green">
              Done
            </Badge>
          ) : (
            <Badge fontSize="0.5em" colorScheme="red">
              Undone
            </Badge>
          )}
        </HStack>

        <TodoSettings todoId={todoId} />
      </HStack>
    </Box>
  );
};

export default TaskItem;
