import React from 'react';
import { Button, Input, Form } from '../../atoms';
import * as S from './style';

interface MapFormInterface {
  callback: (lat: number, long: number) => void;
}

export const MapForm: React.FC<MapFormInterface> = (props) => {
  const [lat, setLat] = React.useState<number>();
  const [long, setLong] = React.useState<number>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    lat && long && props.callback(lat, long);
  };

  return (
    <S.Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          name='lat'
          placeholder='Latitude'
          onChange={(e) => setLat(parseFloat(e.target.value))}
        ></Input>
        <Input
          type='text'
          name='long'
          placeholder='Longitude'
          onChange={(e) => setLong(parseFloat(e.target.value))}
        ></Input>
        <Button type='submit'>Enviar</Button>
      </Form>
    </S.Container>
  );
};
