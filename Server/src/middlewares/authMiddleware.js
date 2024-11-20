import jwt from 'jsonwebtoken';

const jwtAuth = (req, res, next) => {
  // Read the Authorization header
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send("Unauthorized - Token missing or invalid");
  }

  // Extract the token by removing the "Bearer " prefix
  const token = authHeader.split(' ')[1];

  try {
    // Verify the token and attach the payload to the request object
    const payload = jwt.verify(token, "szdi014rTyUfylsmwwEkJF5HAOsiKWrq");
    console.log(payload, "Decoded JWT payload");
    req.user = payload; // Attach the user information from the token to the request
    next(); // Allow the request to proceed
  } catch (err) {
    console.error("JWT Verification Error:", err.message);
    return res.status(401).send('Unauthorized - Invalid token');
  }
};

export default jwtAuth;
