import React from 'react';
import * as S from './styles';
import 'leaflet/dist/leaflet.css';

import { LatLngExpression } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { ActionMenu } from '../../components/molecules/actionMenu';
import { SideMenu } from '../../components/molecules/sideMenu';

export const MainPage: React.FC<any> = () => {
  const [positions, setPositions] = React.useState<LatLngExpression[]>([
    [51.505, -0.09],
  ]);

  const handleSubmit = (lat: number, long: number) => {
    positions.push([lat, long]);
    setPositions([...positions]);
  };

  React.useEffect(() => {
    console.log('positions');
  }, [handleSubmit]);

  return (
    <S.Container>
      <SideMenu />
      <ActionMenu />
      <MapContainer
        center={positions[0]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {positions.map((position, key) => {
          return (
            <Marker position={position} key={key}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </S.Container>
  );
};
