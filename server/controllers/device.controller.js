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

    async addDevice(req, res) {
        const { serialNumber, firstName, lastName, email } = req.body;

        try {
            const payload = {
                serial_number: serialNumber,
                first_name: firstName,
                last_name: lastName,
                email: email
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