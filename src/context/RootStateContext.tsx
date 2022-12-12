import React, { useContext } from 'react';
import { TodosStore } from '../stores/TodosStore';

type RootStateContextValue = {
  todosStore: TodosStore;
};

const RootStateContext = React.createContext<RootStateContextValue>(
  {} as RootStateContextValue
);

const todosStore = new TodosStore();

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <RootStateContext.Provider value={{ todosStore }}>
      {children}
    </RootStateContext.Provider>
  );
};

export const useRootStore = () => useContext(RootStateContext);
