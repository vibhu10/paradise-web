import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import CORS middleware
import propertyRoutes from './src/routes/propertyRoutes.js';
import userRoute from './src/routes/userRoutes.js';

const server = express();

// Enable CORS with specific options
const corsOptions = {
  origin: ['http://localhost:3001', 'http://your-production-frontend-url.com'], // Allowed origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true // Allow cookies to be sent with requests
};

server.use(cors(corsOptions));
server.use(bodyParser.json());

// Define routes
server.use("/api/property", propertyRoutes);
server.use('/api/users', userRoute);

server.get('/', (req, res) => {
  res.send('This is the Node server');
});

// Start the server
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
