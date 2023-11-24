/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { ActionMenuTemplates } from '../../components/molecules/actionMenu/templates';

type ActionMenuTemplates = keyof typeof ActionMenuTemplates;

interface ActionMenuContextInterface {
  id?: string;
  template: ActionMenuTemplates;
  setTemplate: (name: ActionMenuTemplates, id?: string) => void;
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
  const [id, setId] = React.useState<string>();

  const setTemplate = (name: ActionMenuTemplates, id?: string) => {
    setTemplateName(name);
    setId(id);
  };

  return (
    <ActionMenuContext.Provider value={{ id, template, setTemplate }}>
      {children}
    </ActionMenuContext.Provider>
  );
};
