import React from 'react';
import { ActionMenuContextProvider } from './actionMenuContext';

export const GlobalContext: React.FC<any> = ({ children }) => {
  return <ActionMenuContextProvider>{children}</ActionMenuContextProvider>;
};
