import React from 'react';

import Todos from './pages/Todos';
import Hero from './components/Hero';
import Layout from './components/Layout';
import { useObserver } from 'mobx-react-lite';

function App() {
  return useObserver(() => (
    <Layout>
      <Hero />
      <Todos />
    </Layout>
  ));
}

export default App;
