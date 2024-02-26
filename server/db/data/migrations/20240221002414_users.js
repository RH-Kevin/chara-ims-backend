/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("users", function(table) {
        table.increments("id").primary();
        table.string("user_name", 255).unique();
        table.text("hashed_password");
        table.text("salt");
        table.boolean("isAdmin");
        table.boolean("canAccess");
        table.timestamp("date_created").defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("users");
  };
