import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/montserrat';
import theme from './theme';
import { RootStateProvider } from './context/RootStateContext';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <RootStateProvider>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <App />
    </ChakraProvider>
  </RootStateProvider>
);
