/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { ActionMenuTemplates } from '../../components/molecules/actionMenu/templates';

type ActionMenuTemplates = keyof typeof ActionMenuTemplates;

interface ActionMenuContextInterface {
  template: ActionMenuTemplates;
  setTemplate: (name: ActionMenuTemplates) => void;
}

const DEFAULT_VALUE: ActionMenuContextInterface = {
  template: 'startPoint',
  setTemplate: () => {},
};

export const ActionMenuContext =
  React.createContext<ActionMenuContextInterface>(DEFAULT_VALUE);

export const ActionMenuContextProvider: React.FC<any> = ({ children }) => {
  const [template, setTemplateName] =
    React.useState<ActionMenuTemplates>('startPoint');

  const setTemplate = (name: ActionMenuTemplates) => {
    setTemplateName(name);
  };

  return (
    <ActionMenuContext.Provider value={{ template, setTemplate }}>
      {children}
    </ActionMenuContext.Provider>
  );
};
