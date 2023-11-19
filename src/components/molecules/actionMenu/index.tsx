import React from 'react';
import * as S from './style';
import { ActionMenuContext } from '../../../context/actionMenuContext';
import { ActionMenuGlobalInterface, ActionMenuTemplates } from './templates';

export const ActionMenu: React.FC = () => {
  const { template } = React.useContext(ActionMenuContext);

  const Menu: React.FC<ActionMenuGlobalInterface> =
    ActionMenuTemplates[template];

  return (
    <S.Container>
      <Menu callback={({ startPointProps }) => console.log(startPointProps)} />
    </S.Container>
  );
};
