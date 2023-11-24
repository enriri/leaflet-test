import { config } from '../constants';

export type FetchStartPointContract = {
  id?: string;
  coords: number[];
  zoom: number;
  date?: Date;
};

const { API_URL, START_POINT_URI } = config;
const STARTPOINT_URL = API_URL + START_POINT_URI;
const headers = new Headers({
  ['Content-Type']: 'application/json',
});

const fetchGetStartPoint: () => Promise<
  FetchStartPointContract[]
> = async () => {
  return await fetch(STARTPOINT_URL)
    .then((data) => data.json())
    .catch((error) => error);
};

const fetchPostStartPoint: ({
  ...props
}: FetchStartPointContract) => Promise<any> = async (props) => {
  const { coords, zoom } = props;
  return await fetch(STARTPOINT_URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({ coords, zoom }),
  })
    .then((data) => data.json())
    .catch((error) => error);
};

const fetchPatchStartPoint: ({
  ...props
}: FetchStartPointContract) => Promise<any> = async (props) => {
  const { id, coords, zoom } = props;
  return await fetch(STARTPOINT_URL + `/${id}`, {
    headers,
    method: 'PATCH',
    body: JSON.stringify({ coords, zoom }),
  })
    .then((data) => data.json())
    .catch((error) => error);
};

const fetchStartPointCRUD = {
  GET: fetchGetStartPoint,
  POST: fetchPostStartPoint,
  PATCH: fetchPatchStartPoint,
};

export default fetchStartPointCRUD;
