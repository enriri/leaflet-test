import React from 'react';
import { Button, Input } from '../../../../atoms';
import * as S from '../global/style';
import { ActionMenuGlobalInterface, PerimeterPointProps } from '..';
import fetchPerimiterCRUD, {
  FetchPerimeterContract,
} from '../../../../../hooks/fetchPerimeter';

export const PerimeterPoint: React.FC<ActionMenuGlobalInterface> = (props) => {
  const { id } = props;
  const { GET } = fetchPerimiterCRUD;

  const [lat, setLat] = React.useState<string>();
  const [long, setLong] = React.useState<string>();
  const [radius, setRadius] = React.useState<string>();
  const [desc, setDesc] = React.useState<string>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!(radius && desc && lat && long && radius)) return;

    const callToActionProps: PerimeterPointProps = {
      id: id,
      lat: lat,
      long: long,
      radius: radius,
      desc: desc,
    };

    props.callback({ perimeterPointProps: callToActionProps });
  };

  const loadStartPoint = () => {
    GET([{ id }]).then((data) => {
      const dt = data as any as FetchPerimeterContract;

      setLat(dt?.lat);
      setLong(dt?.long);
      setRadius(dt?.radius);
      setDesc(dt?.desc);
    });
  };

  React.useEffect(() => {
    loadStartPoint();
  }, []);

  return (
    <S.Container>
      <S.Title>{id ? desc : 'Novo Perimetro'}</S.Title>

      <S.FormWrapper onSubmit={handleSubmit}>
        <label>Descrição: </label>
        <Input
          type='text'
          name='lat'
          placeholder='Digite'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <label>Latitude: </label>
        <Input
          type='text'
          name='lat'
          placeholder='Digite'
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
        <label>Longitude: </label>
        <Input
          type='text'
          name='long'
          placeholder='Digite'
          value={long}
          onChange={(e) => setLong(e.target.value)}
        />
        <label>Raio: </label>
        <Input
          type='text'
          name='long'
          placeholder='Digite'
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
        />
        <Button type='submit'>Salvar</Button>
      </S.FormWrapper>
    </S.Container>
  );
};
