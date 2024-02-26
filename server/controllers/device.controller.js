const { log } = require("console");
const deviceModel = require("../models/device.model")


module.exports = {
    async inventory(req, res) {
        try {
            const deviceList = await deviceModel.getAll();
            res.json(deviceList);
        } catch (error) {
            console.error(error);
        }
    },

    async viewDevice(req, res) {
        const serialNumber = req.params.serial;
        try {
            const payload = {
                serial_number: serialNumber,
            }
            const result = await deviceModel.getDevice(payload);
            if (result.length == 0) {
                res.status(404).send("No results");
            } else {
                res.status(200).send(result);
            }
        } catch (error) {
            res.status(400).send("Error");
            console.error(error);
        }
    },

    async addDevice(req, res) {
        const { serialNumber, manufacturer, model, warranty, status, location, purchaseDate, notes  } = req.body;

        try {
            const payload = {
                serial_number: serialNumber,
                manufacturer: manufacturer,
                model: model,
                warranty_end: warranty,
                status: status,
                location: location,
                purchase_date: purchaseDate,
                notes: notes,
            }

            await deviceModel.addNewDevice(payload);
            res.status(200).send("Record Added Successfully");
        } catch (error) {
            res.status(400).send("Error");
            console.error(error);
        }
    },

    async editDeviceNote(req, res) {
        const { serialNumber, note } = req.body;

        try {
            const payload = {
                serial_number: serialNumber,
                notes: note
            }

            await deviceModel.editNotes(payload);
            res.status(200).send("Record Note Updated Successfully");
        } catch (error) {
            res.status(400).send("Error");
            console.error(error);
        }
    },

    async editDeviceServiceRecord(req, res) {
        const { serialNumber, serviceRecord } = req.body;

        try {
            const payload = {
                serial_number: serialNumber,
                service_record: serviceRecord
            }

            await deviceModel.editServiceRecords(payload);
            res.status(200).send("Record Service Record Updated Successfully");
        } catch (error) {
            res.status(400).send("Error");
            console.error(error);
        }
    }

}