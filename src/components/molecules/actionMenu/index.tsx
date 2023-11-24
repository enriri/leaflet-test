import React from 'react';
import * as S from './style';
import { ActionMenuContext } from '../../../context/actionMenuContext';
import { ActionMenuGlobalInterface, ActionMenuTemplates } from './templates';
import { fetchIntrestPointCRUD, fetchStartPointCRUD } from '../../../hooks';

export interface ActionMenuInterface
  extends React.HTMLAttributes<HTMLDivElement> {
  onSubmit?: () => void;
}

export const ActionMenu: React.FC<ActionMenuInterface> = (props) => {
  const { template, id } = React.useContext(ActionMenuContext);
  const { onSubmit } = props;

  const Menu: React.FC<ActionMenuGlobalInterface> =
    ActionMenuTemplates[template];

  return (
    <S.Container {...props}>
      <Menu
        id={id}
        callback={({ startPointProps, intrestPointProps }) => {
          if (startPointProps) {
            const { POST, PATCH } = fetchStartPointCRUD;

            const { lat, long, zoom, id } = startPointProps;

            (id &&
              PATCH({ coords: [lat, long], zoom, id }).finally(onSubmit)) ||
              POST({ coords: [lat, long], zoom, id }).finally(onSubmit);
          }
          if (intrestPointProps) {
            const { lat, long, desc, id } = intrestPointProps;

            const { POST, PATCH } = fetchIntrestPointCRUD;

            (id &&
              PATCH({ coords: [lat, long], desc, id }).finally(onSubmit)) ||
              POST({ coords: [lat, long], desc, id }).finally(onSubmit);
          }
        }}
      />
    </S.Container>
  );
};
