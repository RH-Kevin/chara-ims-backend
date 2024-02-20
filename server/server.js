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




// Server
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});



// Routes
app.get("/devices", deviceController.inventory);
app.post("/devices", deviceController.addDevice);
//app.delete("/devices", deviceController.deleteDevice);