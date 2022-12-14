import React from 'react';

import Todos from './pages/Todos';
import Hero from './components/Hero';
import Layout from './components/Layout';
import { useObserver } from 'mobx-react-lite';
import { TodosStore } from './stores/TodosStore';

const todosStore = new TodosStore();

function App() {
  return useObserver(() => (
    <Layout>
      <Hero />
      <Todos todosStore={todosStore} />
    </Layout>
  ));
}

export default App;
