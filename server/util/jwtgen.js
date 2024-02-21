const jwt = require('jsonwebtoken');

module.exports = {
    generateToken(user) {
        const payload = {
          id: user.id, // User's unique identifier
          // You can add more user details here
        };
      
        const secretKey = process.env.JWT_SECRET; // Secret key stored in environment variables
        const options = { expiresIn: '1h' }; // Token expires in 1 hour
      
        const token = jwt.sign(payload, secretKey, options);
        return token;
    }
}