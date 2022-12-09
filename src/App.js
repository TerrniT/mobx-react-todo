import React from 'react';
import {
  Box,
} from '@chakra-ui/react';

import Todos from './pages/Todos';
import Hero from './components/Hero';

function App() {
  return (
    <Box textAlign="center" fontSize="lg">
      <Hero />
      <Todos />
    </Box>
  );
}

export default App;
