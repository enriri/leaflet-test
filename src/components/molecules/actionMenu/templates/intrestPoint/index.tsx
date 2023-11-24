import React from 'react';
import { Button, Input } from '../../../../atoms';
import * as S from '../global/style';
import { IntrestPointProps } from '..';
import { ActionMenuGlobalInterface } from '..';
import fetchIntrestPointCRUD, {
  FetchIntrestPointContract,
} from '../../../../../hooks/fetchIntrestPoint';

export const IntrestPoint: React.FC<ActionMenuGlobalInterface> = (props) => {
  const { id } = props;

  const { GET } = fetchIntrestPointCRUD;

  const [lat, setLat] = React.useState<string>();
  const [long, setLong] = React.useState<string>();
  const [desc, setDesc] = React.useState<string>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!(lat && long && desc)) return;

    const callToActionProps: IntrestPointProps = {
      id: id,
      lat: parseFloat(lat),
      long: parseFloat(long),
      desc: desc,
    };

    lat && long && props.callback({ intrestPointProps: callToActionProps });
  };

  const clearFields = () => {
    setLat('');
    setLong('');
    setDesc('');
  };

  const loadStartPoint = () => {
    GET([{ id }]).then((data) => {
      const dt = data as any as FetchIntrestPointContract;
      setLat(`${dt?.coords?.[0]}`);
      setLong(`${dt?.coords?.[1]}`);
      setDesc(`${dt?.desc}`);
    });
  };

  React.useEffect(() => {
    clearFields();
    if (id) loadStartPoint();
  }, [id]);

  return (
    <S.Container>
      <S.Title>{id ? desc : 'Novo Ponto'}</S.Title>

      <S.FormWrapper onSubmit={handleSubmit}>
        <label>Descrição </label>
        <Input
          type='text'
          name='desc'
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
        <Button type='submit'>Salvar</Button>
      </S.FormWrapper>
    </S.Container>
  );
};
