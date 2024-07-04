const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.cookies.token;  
  
  if (!token) {
    return res.status(403).json({
      message: 'Login First to handle Resources'
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {

    if (err) {
      return res.status(500).json({ message: 'token not valid' });
    }
    
    req.userId = decoded.userId; 
    next();
  });
};
