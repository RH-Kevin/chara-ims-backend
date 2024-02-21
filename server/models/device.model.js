const knex = require("../knex");
//const { validProps, requiredProps } = require("../util/validation");

const DEVICE_TABLE = "devices";

module.exports = {
    DEVICE_TABLE,

    getAll(limit = 5) {
        return knex(DEVICE_TABLE).select('*');
    },

    addNewDevice(device) {
        return knex(DEVICE_TABLE).insert(device);
    }
}