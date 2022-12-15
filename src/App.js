import React from 'react';

import Todos from './pages/Todos';
import Hero from './components/Hero';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Hero />
      <Todos />
    </Layout>
  );
}

export default App;
