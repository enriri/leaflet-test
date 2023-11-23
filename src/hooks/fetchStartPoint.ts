import { config } from '../constants';

export type FetchStartPointContract = {
  id?: number;
  coords: number[];
  zoom: number;
  date?: Date;
};

const { API_URL, PERIMETER_URI } = config;
const STARTPOINT_URL = API_URL + PERIMETER_URI;

const fetchGetStartPoint: () => Promise<FetchStartPointContract> = async () => {
  return await fetch(STARTPOINT_URL)
    .then((data) => data.json())
    .catch((error) => error);
};

const fetchPostStartPoint: ({
  ...props
}: FetchStartPointContract) => Promise<any> = async (props) => {
  const { coords, zoom } = props;
  return await fetch(STARTPOINT_URL, {
    method: 'POST',
    body: JSON.stringify({ coords, zoom }),
  })
    .then((data) => data.json())
    .catch((error) => error);
};

const fetchUpdateStartPoint: ({
  ...props
}: FetchStartPointContract) => Promise<any> = async (props) => {
  const { id, coords, zoom } = props;
  return await fetch(STARTPOINT_URL, {
    method: 'PATCH',
    body: JSON.stringify({ id, coords, zoom }),
  })
    .then((data) => data.json())
    .catch((error) => error);
};

const fetchStartPointCRUD = {
  GET: fetchGetStartPoint,
  POST: fetchPostStartPoint,
  UPDATE: fetchUpdateStartPoint,
};

export default fetchStartPointCRUD;
