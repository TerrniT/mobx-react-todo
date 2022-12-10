import React from 'react';
import {
  Flex,
  Heading,
  Text,
  Link,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import Scene from './model/Scene';
import ColorModeSwitcher from './../atoms/ColorModeSwitcher';

const Hero = () => {
  const color = useColorModeValue('gray.800', 'white');

  return (
    <div>
      <Flex p={3} display="flex" flexDirection="column">
        <Scene />
        <Heading justifySelf="flex-start" color={color} fontWeight="500">
          Todo
        </Heading>
        <HStack justifyContent="space-between">
          <Text>
            <Link
              justifySelf="center"
              href="https://github.com/TerrniT"
              isExternal
            >
              @terrnit <ExternalLinkIcon justifySelf="center" mb={1} />
            </Link>
          </Text>

          <ColorModeSwitcher />
        </HStack>
      </Flex>
    </div>
  );
};

export default Hero;
