import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import useUniqueId from '../hooks/useUniqueId';

const AddTodo = () => {
  const { REACT_APP_FAKE_SERVER } = process.env;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [todoDone, setTodoDone] = useState(true);
  const [todoTitle, setTodoTitle] = useState('');

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const modes = useColorModeValue('purple.400', 'orange.300');
  const color = useColorModeValue('gray.800', 'white');

  const handleNewTodo = event => {
    event.preventDefault();
    if (!newTodo) return;

    const data = {
      id: useUniqueId,
      body: newTodo,
      completed: todoDone,
    };

    axios
      .post(`${REACT_APP_FAKE_SERVER}/todos`, data)
      .then(res => setTodos([...todos, res.data]));

    setNewTodo('');
  };

  const handleChangeTodo = event => {
    event.preventDefault();
    const title = setTodoTitle({ title: event.target.value });

    console.log(title);
  };

  return (
    <>
      <Button color={color} onClick={onOpen} ml={5} p={4} size="xs" bg={modes}>
        Add Task
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />

        <form onSubmit={handleNewTodo}>
          <ModalContent>
            <ModalHeader>Create your todos</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  ref={initialRef}
                  name="title"
                  onChange={handleChangeTodo}
                  placeholder="Title"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Status</FormLabel>
                <HStack>
                  <Checkbox></Checkbox>
                  <Text>Complete</Text>
                </HStack>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" type="submit" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default AddTodo;
