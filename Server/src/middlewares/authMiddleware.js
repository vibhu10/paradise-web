import jwt from 'jsonwebtoken';

const jwtAuth = (req, res, next) => {
  try {
    // Read the Authorization header
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.error("Token is missing or malformed:", authHeader);
      return res.status(401).json({ message: 'Unauthorized - Token missing or malformed' });
    }

    // Extract the token by removing the "Bearer " prefix
    const token = authHeader.split(' ')[1];
    
    // Log the token for debugging (for development purposes only)
    console.log("Received token:", token);

    // Secret key (ensure this is securely stored in environment variables)
    const secretKey = process.env.JWT_SECRET || "szdi014rTyUfylsmwwEkJF5HAOsiKWrq";

    // Verify the token
    const payload = jwt.verify(token, secretKey);
    console.log('Decoded JWT payload:', payload);

    // Attach the user information from the token to the request
    req.user = payload;

    // Allow the request to proceed
    next();
  } catch (err) {
    console.error("JWT Verification Error:", err.message);

    // Handle different JWT errors with more specific messages
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Unauthorized - Token expired' });
    }
    if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }

    // General error response
    return res.status(401).json({ message: 'Unauthorized - Token verification failed', error: err.message });
  }
};

export default jwtAuth;
