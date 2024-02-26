/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("devices", function (table) {
        table.increments("id").primary(); // Primary Key
        table.string("serial_number", 32).unique();
        table
          .string("email", 32)
          .index(); // Adding an index makes searching by email faster
        table.string("first_name", 32);
        table.string("last_name", 32)
        table.date("date_assigned");
        table.date("purchase_date");
        table.string("manufacturer");
        table.string("model");
        table.date("warranty_end");
        table.string("status");
        table.string("location");
        table.string("service_record", 1000);
        table.string("notes", 1000);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("devices");
  };
