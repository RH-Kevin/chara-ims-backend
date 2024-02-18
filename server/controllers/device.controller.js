const deviceModel = require("../models/device.model")


module.exports = {
    async inventory(req, res) {
        try {
            const deviceList = await deviceModel.getAll();
            res.json(deviceList);
        } catch (error) {
            console.error(error);
        }
    }
}