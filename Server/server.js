import express from 'express';
import bodyParser from 'body-parser'; // Corrected typo and removed duplicate import
import propertyRoutes from './src/routes/propertyRoutes.js';
import userRoute from './src/routes/userRoutes.js';
const server = express();
server.use(bodyParser.json());

server.use("/api/property", propertyRoutes);
server.use('/api/users',userRoute)
server.get('/', (req, res) => {
  res.send('This is the Node server');
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
