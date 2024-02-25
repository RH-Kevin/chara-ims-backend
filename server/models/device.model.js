const { log } = require("console");
const knex = require("../knex");
//const { validProps, requiredProps } = require("../util/validation");

const DEVICE_TABLE = "devices";

module.exports = {
    DEVICE_TABLE,

    getAll(limit = 5) {
        return knex(DEVICE_TABLE).select('*');
    },

    getDevice(device) {
        return knex(DEVICE_TABLE).select('*').where('serial_number', device.serial_number);
    },

    addNewDevice(device) {
        return knex(DEVICE_TABLE).insert(device);
    },

    editNotes(note) {
        return knex(DEVICE_TABLE)
        .where('serial_number', note.serial_number)
        .update('notes', note.notes);
    },

    editServiceRecords(note) {
        return knex(DEVICE_TABLE)
        .where('serial_number', note.serial_number)
        .update('service_record', note.service_record);
    }
}