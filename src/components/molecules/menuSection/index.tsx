import React from 'react';
import * as S from './style';
import { Button } from '../../atoms';

export interface MenuSectionInterface {
  title: string;
  items: itemsInterface[];
  onCreate: () => void;
  deleteOptions?: deleteOptions;
  onClick: () => void;
}

type deleteOptions = {
  onDelete: () => void;
};

type itemsInterface = {
  id: string;
  label: string;
  data: any;
};

export const MenuSection: React.FC<MenuSectionInterface> = (props) => {
  const {
    title,
    items: itemsFromOptions,
    onCreate,
    deleteOptions,
    onClick,
  } = props;
  const [items] = React.useState<itemsInterface[]>(itemsFromOptions);
  return (
    <S.Container>
      <S.Title>
        {title} <Button onClick={onCreate}>+</Button>
      </S.Title>
      <S.ButtonWrapper>
        {items.map((item, key) => {
          return (
            <Button onClick={onClick} key={key}>
              {item.label}{' '}
              {deleteOptions && (
                <Button onClick={deleteOptions.onDelete}>Delete</Button>
              )}
            </Button>
          );
        }) || <p>Sem itens para exibir</p>}
      </S.ButtonWrapper>
    </S.Container>
  );
};
