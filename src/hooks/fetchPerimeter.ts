import { config } from '../constants';

export type FetchPerimeterContract = {
  id?: number;
  coords: number[];
  date?: Date;
};

const { API_URL, PERIMETER_URI } = config;

const fetchGetPerimeter: () => Promise<FetchPerimeterContract> = async () => {
  return await fetch(API_URL + PERIMETER_URI)
    .then((data) => data.json())
    .catch((error) => error);
};

const fetchPostPerimeter: ({
  ...props
}: FetchPerimeterContract) => Promise<any> = async (props) => {
  const { coords } = props;
  return await fetch(API_URL + PERIMETER_URI, {
    method: 'POST',
    body: JSON.stringify({ coords }),
  })
    .then((data) => data.json())
    .catch((error) => error);
};

const fetchDeletePerimeter: ({
  ...props
}: FetchPerimeterContract) => Promise<any> = async (props) => {
  const { id } = props;
  return await fetch(API_URL + PERIMETER_URI + `/${id}`, {
    method: 'DELETE',
  })
    .then((data) => data.json())
    .catch((error) => error);
};

const fetchPerimiterCRUD = {
  GET: fetchGetPerimeter,
  POST: fetchPostPerimeter,
  DELETE: fetchDeletePerimeter,
};

export default fetchPerimiterCRUD;
