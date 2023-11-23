import React from 'react';
import { Button, Input } from '../../../../atoms';
import * as S from './style';
import { StartPointProps } from '..';
import { ActionMenuGlobalInterface } from '..';
import fetchStartPointCRUD, {
  FetchStartPointContract,
} from '../../../../../hooks/fetchStartPoint';

export const StartPoint: React.FC<ActionMenuGlobalInterface> = (props) => {
  const { GET } = fetchStartPointCRUD;

  const [data, setData] = React.useState<FetchStartPointContract>();

  const [lat, setLat] = React.useState<number>();
  const [long, setLong] = React.useState<number>();
  const [zoom, setZoom] = React.useState<number>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!(lat && long && zoom)) return;

    const callToActionProps: StartPointProps = {
      lat: lat,
      long: long,
      zoom: zoom,
    };

    lat && long && props.callback({ startPointProps: callToActionProps });
  };

  return (
    <S.Container>
      <S.Title>Ponto e Zoom iniciais</S.Title>

      <S.FormWrapper onSubmit={handleSubmit}>
        <label>Latitude: </label>
        <Input
          type='text'
          name='lat'
          placeholder='Digite'
          onChange={(e) => setLat(parseFloat(e.target.value))}
        />
        <label>Longitude: </label>
        <Input
          type='text'
          name='long'
          placeholder='Digite'
          onChange={(e) => setLong(parseFloat(e.target.value))}
        />
        <label>Zoom: </label>
        <Input
          type='text'
          name='long'
          placeholder='Digite'
          onChange={(e) => setZoom(parseFloat(e.target.value))}
        />
        <Button type='submit'>Salvar</Button>
      </S.FormWrapper>
    </S.Container>
  );
};
