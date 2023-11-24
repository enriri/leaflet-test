import { AreaPointProps } from '../components/molecules/actionMenu/templates';
import { config } from '../constants';

export type FetchAreaPointContract = Partial<AreaPointProps>;

const { API_URL, AREA_URI } = config;
const URL = API_URL + AREA_URI;
const headers = new Headers({
  ['Content-Type']: 'application/json',
});

const fetchGetAreaPoint: ([{ ...props }]) => Promise<
  FetchAreaPointContract[]
> = async (props) => {
  const { id } = props[0];

  return await fetch(URL + `${id !== undefined ? '/' + id : ''}`)
    .then((data) => data.json())
    .catch((error) => error);
};

const fetchPostAreaPoint: ({
  ...props
}: FetchAreaPointContract) => Promise<any> = async (props) => {
  const { coords, desc } = props;
  return await fetch(URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({ coords, desc, label: desc }),
  })
    .then((data) => data.json())
    .catch((error) => error);
};

const fetchPatchAreaPoint: ({
  ...props
}: FetchAreaPointContract) => Promise<any> = async (props) => {
  const { id, coords, desc } = props;
  return await fetch(URL + `/${id}`, {
    headers,
    method: 'PATCH',
    body: JSON.stringify({ coords, desc, label: desc }),
  })
    .then((data) => data.json())
    .catch((error) => error);
};

const fetchDeleteAreaPoint: ({
  ...props
}: FetchAreaPointContract) => Promise<any> = async (props) => {
  const { id } = props;
  return await fetch(URL + `/${id}`, {
    headers,
    method: 'DELETE',
  })
    .then((data) => data.json())
    .catch((error) => error);
};

const fetchAreaPointCRUD = {
  GET: fetchGetAreaPoint,
  POST: fetchPostAreaPoint,
  PATCH: fetchPatchAreaPoint,
  DELETE: fetchDeleteAreaPoint,
};

export default fetchAreaPointCRUD;
