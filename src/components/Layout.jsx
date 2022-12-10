import React from 'react';
import { Center, Flex } from '@chakra-ui/react';

const Layout = props => {
  return (
    <Center>
      <Flex
        alignItems="center"
        flexDir="column"
        maxW="320px"
        textAlign="center"
        fontSize="lg"
        justifyContent="center"
      >
        {props.children}
      </Flex>
    </Center>
  );
};

export default Layout;
