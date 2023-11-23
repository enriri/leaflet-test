import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const port = 3002;

server.use(jsonServer.bodyParser);
server.use(router);

server.listen(port, () => {
  console.log(`Mock server running in ${port}`);
});
