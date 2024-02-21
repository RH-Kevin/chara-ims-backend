const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');
const jsonWebToken = require("./util/jwtgen");

const PORT = process.env.PORT;




const app = express();


// Middleware -- may need to fill this in later
app.use(express.json());
app.use(cors());
//app.options();

// JWT token Middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
  
    if (token == null) return res.sendStatus(401); // No token provided
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403); // Invalid token
      req.user = user;
      next(); // Proceed to the next middleware/function
    });
}


// Controllers
const deviceController = require("./controllers/device.controller");
const userController = require("./controllers/user.controller");



// Server
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});



// Device Routes
app.get("/devices", authenticateToken, deviceController.inventory);
app.post("/devices", deviceController.addDevice);
app.post("/signup", userController.signUp);
app.post("/login", userController.login);
//app.delete("/devices", deviceController.deleteDevice);


// User Routes
