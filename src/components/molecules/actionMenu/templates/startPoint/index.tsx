import React from 'react';
import { Button, Input } from '../../../../atoms';
import * as S from '../global/style';
import { StartPointProps } from '..';
import { ActionMenuGlobalInterface } from '..';
import fetchStartPointCRUD, {
  FetchStartPointContract,
} from '../../../../../hooks/fetchStartPoint';

export const StartPoint: React.FC<ActionMenuGlobalInterface> = (props) => {
  const { GET } = fetchStartPointCRUD;

  const [data, setData] = React.useState<FetchStartPointContract[]>();

  const [lat, setLat] = React.useState<number>();
  const [long, setLong] = React.useState<number>();
  const [zoom, setZoom] = React.useState<number>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!(lat && long && zoom)) return;

    const callToActionProps: StartPointProps = {
      id: data?.[0]?.id,
      lat: lat,
      long: long,
      zoom: zoom,
    };

    lat && long && props.callback({ startPointProps: callToActionProps });
  };

  const loadStartPoint = () => {
    GET().then((data) => {
      setData(data);
      setLat(data?.[0]?.coords?.[0]);
      setLong(data?.[0]?.coords?.[1]);
      setZoom(data?.[0]?.zoom);
    });
  };

  React.useEffect(() => {
    loadStartPoint();
  }, []);

  return (
    <S.Container>
      <S.Title>Ponto e Zoom iniciais</S.Title>

      <S.FormWrapper onSubmit={handleSubmit}>
        <label>Latitude: </label>
        <Input
          type='text'
          name='lat'
          placeholder='Digite'
          value={lat}
          onChange={(e) => setLat(parseFloat(e.target.value))}
        />
        <label>Longitude: </label>
        <Input
          type='text'
          name='long'
          placeholder='Digite'
          value={long}
          onChange={(e) => setLong(parseFloat(e.target.value))}
        />
        <label>Zoom: </label>
        <Input
          type='text'
          name='long'
          placeholder='Digite'
          value={zoom}
          onChange={(e) => setZoom(parseFloat(e.target.value))}
        />
        <Button type='submit'>Salvar</Button>
      </S.FormWrapper>
    </S.Container>
  );
};
