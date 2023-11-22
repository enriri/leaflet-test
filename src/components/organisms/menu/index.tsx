import React from 'react';
import * as S from './style';
import { MenuSectionInterface } from '../../molecules/menuSection';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const Menu: React.FC = () => {
  const menus: MenuSectionInterface[] = [
    {
      items: [{ id: '1', label: 'Ponto e Zoom iniciais', data: {} }],
      onClickMenu: () => console.log('click'),
    },
    {
      items: [
        { id: '1', label: 'item1', data: {} },
        { id: '1', label: 'item1', data: {} },
      ],
      onClickMenu: () => console.log('click'),
      deleteOptions: {
        onDelete: () => console.log('delete'),
      },
      createOptions: {
        onCreate: () => console.log('create'),
      },
      title: 'Area',
    },
    {
      items: [{ id: '1', label: 'item1', data: {} }],
      onClickMenu: () => console.log('click'),
      deleteOptions: {
        onDelete: () => console.log('delete'),
      },
      createOptions: {
        onCreate: () => console.log('create'),
      },
      title: 'Perimetro',
    },
  ];

  return (
    <S.Container>
      <S.SideMenuWrapper>
        <S.MenuSectionWrapper>
          {menus.map((menu, key) => {
            return <S.StyledMenuSection key={key} {...menu} />;
          })}
        </S.MenuSectionWrapper>
        <S.ActionMapWrapper>
          <S.StyledActionMenu />
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '500px', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
          </MapContainer>
        </S.ActionMapWrapper>
      </S.SideMenuWrapper>
    </S.Container>
  );
};
