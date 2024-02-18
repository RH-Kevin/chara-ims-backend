const knex = require("../knex");
//const { validProps, requiredProps } = require("../util/validation");

const DEVICE_TABLE = "devices";

module.exports = {
    DEVICE_TABLE,

    getAll(limit = 5) {
        return knex('devices').select('*');
            // .select({
            //     serial_number: "serial_number",
            //     first_name: "first_name",
            //     last_name: "last_name",
            //     date_assigned: "date_assigned",
            //     warranty: "warranty_end",
            //     status: "status",
            //     location: "location"
            // })
            // .from(DEVICE_TABLE)
            // .limit(limit);
    }
}