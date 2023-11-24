import { PerimeterPointProps } from '../components/molecules/actionMenu/templates';
import { config } from '../constants';

export type FetchPerimeterContract = Partial<PerimeterPointProps>;

const { API_URL, PERIMETER_URI } = config;
const URL = API_URL + PERIMETER_URI;
const headers = new Headers({
  ['Content-Type']: 'application/json',
});

const fetchGetPerimeterPoint: ([{ ...props }]) => Promise<
  FetchPerimeterContract[]
> = async (props) => {
  const { id } = props[0];

  return await fetch(URL + `${id !== undefined ? '/' + id : ''}`)
    .then((data) => data.json())
    .catch((error) => error);
};

const fetchPostPerimeterPoint: ({
  ...props
}: FetchPerimeterContract) => Promise<any> = async (props) => {
  const { lat, long, radius, desc } = props;
  return await fetch(URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({ lat, long, radius, desc, label: desc }),
  })
    .then((data) => data.json())
    .catch((error) => error);
};

const fetchPatchPerimeterPoint: ({
  ...props
}: FetchPerimeterContract) => Promise<any> = async (props) => {
  const { id, lat, long, radius, desc } = props;
  return await fetch(URL + `/${id}`, {
    headers,
    method: 'PATCH',
    body: JSON.stringify({ lat, long, radius, desc, label: desc }),
  })
    .then((data) => data.json())
    .catch((error) => error);
};

const fetchDeletePerimeterPoint: ({
  ...props
}: FetchPerimeterContract) => Promise<any> = async (props) => {
  const { id } = props;
  return await fetch(URL + `/${id}`, {
    headers,
    method: 'DELETE',
  })
    .then((data) => data.json())
    .catch((error) => error);
};

const fetchPerimeterPointCRUD = {
  GET: fetchGetPerimeterPoint,
  POST: fetchPostPerimeterPoint,
  PATCH: fetchPatchPerimeterPoint,
  DELETE: fetchDeletePerimeterPoint,
};

export default fetchPerimeterPointCRUD;
