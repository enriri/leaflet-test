import React from 'react';
import { Button, Input } from '../../../../atoms';
import * as S from '../global/style';
import { ActionMenuGlobalInterface, AreaPointProps } from '..';
import fetchAreaPointCRUD, {
  FetchAreaPointContract,
} from '../../../../../hooks/fetchAreaPoint';

export const AreaPoint: React.FC<ActionMenuGlobalInterface> = (props) => {
  const { id } = props;

  const { GET } = fetchAreaPointCRUD;

  const [latSup, setLatSup] = React.useState<string>();
  const [longSup, setLongSup] = React.useState<string>();
  const [latInf, setLatInf] = React.useState<string>();
  const [longInf, setLongInf] = React.useState<string>();
  const [desc, setDesc] = React.useState<string>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!(latSup && longSup && latInf && longInf && desc)) return;

    const callToActionProps: AreaPointProps = {
      id: id,
      coords: {
        lat_inf: latInf,
        lat_sup: latSup,
        long_inf: longInf,
        long_sup: longSup,
      },
      desc: desc,
    };

    props.callback({ areaPointProps: callToActionProps });
  };

  const clearFields = () => {
    setLatSup(undefined);
    setLongSup(undefined);
    setLatInf(undefined);
    setLongInf(undefined);
    setDesc('');
  };

  const loadAreaPoint = () => {
    GET([{ id }]).then((data) => {
      const dt = data as any as FetchAreaPointContract;

      setLatSup(dt?.coords?.lat_sup);
      setLongSup(dt?.coords?.long_sup);
      setLatInf(dt?.coords?.lat_inf);
      setLongInf(dt?.coords?.long_inf);
      setDesc(`${dt?.desc}`);
    });
  };

  React.useEffect(() => {
    clearFields();
    if (id) loadAreaPoint();
  }, [id]);

  return (
    <S.Container>
      <S.Title>{id ? desc : 'Nova Area'}</S.Title>

      <S.FormWrapper onSubmit={handleSubmit}>
        <label>Descrição </label>
        <Input
          type='text'
          name='desc'
          placeholder='Digite'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <label>Latitude Superior: </label>
        <Input
          type='text'
          name='lat'
          placeholder='Digite'
          value={latSup}
          onChange={(e) => setLatSup(e.target.value)}
        />
        <label>Latitude Inferior: </label>
        <Input
          type='text'
          name='long'
          placeholder='Digite'
          value={latInf}
          onChange={(e) => setLatInf(e.target.value)}
        />
        <label>Longitude Inferior: </label>
        <Input
          type='text'
          name='long'
          placeholder='Digite'
          value={longInf}
          onChange={(e) => setLongInf(e.target.value)}
        />
        <label>Longitude Superior: </label>
        <Input
          type='text'
          name='long'
          placeholder='Digite'
          value={longSup}
          onChange={(e) => setLongSup(e.target.value)}
        />
        <Button type='submit'>Salvar</Button>
      </S.FormWrapper>
    </S.Container>
  );
};
