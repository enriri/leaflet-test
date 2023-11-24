import React from 'react';
import { ActionMenuContextProvider } from './actionMenuContext';
import { MapContextProvider } from './mapContext';

export const GlobalContext: React.FC<any> = ({ children }) => {
  return (
    <ActionMenuContextProvider>
      <MapContextProvider>{children}</MapContextProvider>
    </ActionMenuContextProvider>
  );
};
