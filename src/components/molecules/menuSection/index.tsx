import React from 'react';
import * as S from './style';
import { Button } from '../../atoms';

export type onActionProps = {
  id?: string;
  data: any;
};

export interface MenuSectionInterface
  extends Partial<React.HTMLAttributes<HTMLDivElement>> {
  title?: string;
  items: itemsInterface[];
  createOptions?: createOptions;
  deleteOptions?: deleteOptions;
  onClickMenu: ({ ...props }: onActionProps) => void;
}

export type deleteOptions = {
  onDelete: ({ ...props }: onActionProps) => void;
};

export type createOptions = {
  onCreate: () => void;
};

export type itemsInterface = {
  id: string;
  label: string;
  data: any;
};

export const MenuSection: React.FC<MenuSectionInterface> = (props) => {
  const {
    title,
    items: itemsFromOptions,
    deleteOptions,
    onClickMenu,
    createOptions,
  } = props;
  const [items] = React.useState<itemsInterface[]>(itemsFromOptions);
  return (
    <S.Container {...props}>
      {title && (
        <S.Title>
          {title}{' '}
          {createOptions && (
            <Button
              theme='dark'
              customType='createItem'
              onClick={createOptions.onCreate}
            >
              <strong>+</strong>
            </Button>
          )}
        </S.Title>
      )}
      <S.ButtonWrapper>
        {items.map((item, key) => {
          const { id, label, data } = item;
          return (
            <Button
              theme='dark'
              onClick={() => onClickMenu({ id: id, data: data })}
              key={key}
            >
              {label}{' '}
              {deleteOptions && (
                <Button
                  theme='dark'
                  customType='delete'
                  onClick={() => deleteOptions.onDelete({ id: id, data: data })}
                >
                  D
                </Button>
              )}
            </Button>
          );
        }) || <p>Sem itens para exibir</p>}
      </S.ButtonWrapper>
    </S.Container>
  );
};
