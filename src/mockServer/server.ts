import jsonServer from 'json-server';
import cors from 'cors';

const db = {
  startPoint: [],
  perimeterPoint: [],
  areaPoint: [],
  isolatedPoint: [],
  intrestPoint: [],
};

const server = jsonServer.create();
const router = jsonServer.router(db);
const port = 3002;

server.use(jsonServer.bodyParser);
server.use(cors());
server.use(router);

server.listen(port, () => {
  console.log(`Mock server running in ${port}`);
});
