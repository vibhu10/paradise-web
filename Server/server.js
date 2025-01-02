import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import CORS middleware

import propertyRoutes from './src/routes/propertyRoutes.js';
import userRoute from './src/routes/userRoutes.js';
import dotenv from 'dotenv';
import adminRoute from './src/routes/adminRoutes.js';
dotenv.config()
const server = express();

// Enable CORS with specific options
const corsOptions = {
  origin: ['http://localhost:3001', "https://vibhu10.github.io/"], // Allowed origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true // Allow cookies to be sent with requests
};
server.use(function (req, res, next) {
  // Correctly setting Content-Type for JSON responses
  res.setHeader('Content-Type', 'application/json; charset=UTF-8');
  // Allow all origins for CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Allowed methods for CORS
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Allowed headers for CORS
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept,Authorization,request_url');
  // Allow credentials
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Proceed to next middleware
  next();
});
server.use(cors());
server.use(bodyParser.json());

// Define routes
server.use("/api/property", propertyRoutes);
server.use('/api/users', userRoute);
server.use('/api/admin',adminRoute);
server.get('/', (req, res) => {
  res.send('This is the Node server');
});

server.use((req,res)=>{
  res.status(404).send("api not found")
})
// Start the server
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
