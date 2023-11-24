import { config } from '../constants';

export type FetchIntrestPointContract = {
  id?: string;
  coords?: number[];
  desc?: string;
  label?: string;
};

const { API_URL, INTREST_POINT_URL } = config;
const URL = API_URL + INTREST_POINT_URL;
const headers = new Headers({
  ['Content-Type']: 'application/json',
});

const fetchGetIntrestPoint: ([{ ...props }]) => Promise<
  FetchIntrestPointContract[]
> = async (props) => {
  const { id } = props[0];

  return await fetch(URL + `${id !== undefined ? '/' + id : ''}`)
    .then((data) => data.json())
    .catch((error) => error);
};

const fetchPostIntrestPoint: ({
  ...props
}: FetchIntrestPointContract) => Promise<any> = async (props) => {
  const { coords, desc } = props;
  return await fetch(URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({ coords, desc, label: desc }),
  })
    .then((data) => data.json())
    .catch((error) => error);
};

const fetchPatchIntrestPoint: ({
  ...props
}: FetchIntrestPointContract) => Promise<any> = async (props) => {
  const { id, coords, desc } = props;
  return await fetch(URL + `/${id}`, {
    headers,
    method: 'PATCH',
    body: JSON.stringify({ coords, desc, label: desc }),
  })
    .then((data) => data.json())
    .catch((error) => error);
};

const fetchDeleteIntrestPoint: ({
  ...props
}: FetchIntrestPointContract) => Promise<any> = async (props) => {
  const { id } = props;
  return await fetch(URL + `/${id}`, {
    headers,
    method: 'DELETE',
  })
    .then((data) => data.json())
    .catch((error) => error);
};

const fetchIntrestPointCRUD = {
  GET: fetchGetIntrestPoint,
  POST: fetchPostIntrestPoint,
  PATCH: fetchPatchIntrestPoint,
  DELETE: fetchDeleteIntrestPoint,
};

export default fetchIntrestPointCRUD;
