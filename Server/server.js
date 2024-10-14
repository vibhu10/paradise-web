import express from 'express';
const server = express();

server.get('/', (req, res) => {
res.send('This is the Node server');
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
