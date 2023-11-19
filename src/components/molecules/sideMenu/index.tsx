import React from 'react';
import * as S from './style';
import { MenuSection } from '../menuSection';

export const SideMenu: React.FC = () => {
  return (
    <S.Container>
      <MenuSection
        title='Teste'
        items={[{ label: 'TesteButton', id: 'Teste', data: {} }]}
        onCreate={() => console.log('123')}
        onClick={() => console.log('click')}
        deleteOptions={{ onDelete: () => console.log('delete') }}
      />
    </S.Container>
  );
};
