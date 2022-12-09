import { Text, Checkbox, HStack, Container, Badge, Box, Flex, VStack } from '@chakra-ui/react';
import TodoSettings from '../atoms/TodoSettings';



const TaskItem = ({ task, color }) => {
  return (
    <Container
      maxW="310px"
      my={3}
      h={100}
    >
      <HStack justifyContent="space-between">
        <Checkbox
          colorScheme="green"
        >
        </Checkbox>

        <VStack w="100%">
          <Text color={color} w="80%" noOfLines="1" textAlign="flex-start">
            {task.text}
          </Text>
          <Badge fontSize="0.5em" colorScheme="green">complete</Badge>
        </VStack>
        <TodoSettings />
      </HStack>

    </Container>

  );
};


export default TaskItem;

