const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const knex = require("./knex");


const PORT = process.env.PORT || 3050;


dotenv.config();

const app = express();


// Middleware -- may need to fill this in later
app.use(express.json());
app.use(cors());
//app.options();


// Controllers
const deviceController = require("./controllers/device.controller");
const userController = require("./controllers/user.controller");

// Server
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});

// Device Routes
app.get("/devices", deviceController.inventory);
app.get("/devices/:serial", deviceController.viewDevice);
app.post("/devices/adddevice", deviceController.addDevice);
app.put("/device/notes", deviceController.editDeviceNote);
app.put("/device/servicerecord", deviceController.editDeviceServiceRecord);
//app.delete("/devices", deviceController.deleteDevice);


// User Routes
app.post("/signup", userController.signUp);
app.post("/login", userController.login);
app.get("/users", userController.users);
app.put("/swaprole", userController.swapRole);