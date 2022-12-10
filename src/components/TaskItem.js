import {
  Text,
  Checkbox,
  HStack,
  Container,
  Badge,
  VStack,
} from '@chakra-ui/react';
import TodoSettings from '../atoms/TodoSettings';

const TaskItem = ({ title, description, status, todoId, color }) => {
  return (
    <Container maxW="310px" my={3} h={100}>
      <HStack justifyContent="space-between">
        <Checkbox colorScheme="green"></Checkbox>
        <HStack w="100%">
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
    </Container>
  );
};

export default TaskItem;
