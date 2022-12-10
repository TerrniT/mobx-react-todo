import React from 'react';
import { Flex, Heading, Text, Link, useColorModeValue } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import Scene from './model/Scene';
import ColorModeSwitcher from './../atoms/ColorModeSwitcher';

const Hero = () => {
  const color = useColorModeValue('gray.800', 'white');

  return (
    <div>
      <ColorModeSwitcher mt="5" />
      <Flex p={3} display="flex" flexDirection="column">
        <Scene />
        <Heading justifySelf="flex-start" color={color} fontWeight="500">
          Todo
        </Heading>
        <Text>
          <Link
            justifySelf="center"
            href="https://github.com/TerrniT"
            isExternal
          >
            @terrnit <ExternalLinkIcon justifySelf="center" mb={1} />
          </Link>
        </Text>
      </Flex>
    </div>
  );
};

export default Hero;
