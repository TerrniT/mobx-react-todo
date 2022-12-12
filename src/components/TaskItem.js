import {
  Text,
  Checkbox,
  HStack,
  Container,
  Badge,
  Box,
  Fade,
} from '@chakra-ui/react';
import axios from 'axios';
import TodoSettings from '../atoms/TodoSettings';

const { REACT_APP_FAKE_SERVER } = process.env;

const TaskItem = ({
  title,
  description,
  status,
  todoId,
  color,
  todo,
  todos,
  children,
}) => {
  return (
    <Box maxW="280px" px={2} my={3} h={10}>
      <HStack>
        {children}
        <HStack justifyContent="space-between" minW="80%">
          <Text
            fontSize="15"
            color={status ? '#333' : { color }}
            noOfLines="1"
            textAlign="flex-start"
            textDecoration={status ? 'line-through' : 'none'}
            transition="0.2s 0s linear"
          >
            {description}
          </Text>

          <Fade>
            <Badge fontSize="0.5em" colorScheme={status ? 'green' : 'red'}>
              {status ? 'Done' : 'Undone'}
            </Badge>
          </Fade>
        </HStack>

        <TodoSettings todoId={todoId} />
      </HStack>
    </Box>
  );
};

export default TaskItem;
