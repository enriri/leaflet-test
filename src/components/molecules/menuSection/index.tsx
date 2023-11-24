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
  active?: boolean;
  items: itemsInterface[];
  createoptions?: createOptions;
  deleteoptions?: deleteOptions;
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
    deleteoptions,
    onClickMenu,
    createoptions,
  } = props;
  const [items] = React.useState<itemsInterface[]>(itemsFromOptions);
  return (
    <S.Container {...props}>
      {title && (
        <S.Title>
          {title}{' '}
          {createoptions && (
            <Button
              theme='dark'
              customtype='createItem'
              onClick={createoptions.onCreate}
            >
              <strong>+</strong>
            </Button>
          )}
        </S.Title>
      )}
      <S.ButtonWrapper>
        {items.map((item, key) => {
          const { id, label, data } = item;
          const [active, setActive] = React.useState<boolean>(false);
          return (
            <Button
              theme='dark'
              onClick={() => {
                onClickMenu({ id: id, data: data });
                setActive(!active);
              }}
              key={key}
              isactive={active}
            >
              {label}{' '}
              {deleteoptions && (
                <Button
                  theme='dark'
                  customtype='delete'
                  onClick={() => deleteoptions.onDelete({ id: id, data: data })}
                >
                  X
                </Button>
              )}
            </Button>
          );
        }) || <p>Sem itens para exibir</p>}
      </S.ButtonWrapper>
    </S.Container>
  );
};
