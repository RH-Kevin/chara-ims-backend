/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('devices').del()
  await knex('devices').insert([
    {serial_number: 'FVFDNSK4LDL3', email: "test@test.com", first_name: "James", last_name: "Brown", date_assigned: "01/01/2024", warranty_end: "01/01/2025", location: "NF", status: "assigned"},
    {serial_number: 'FVFDNSK4H32A', email: "test2@test.com", first_name: "Michael", last_name: "Jordan", date_assigned: "02/02/2024", warranty_end: "02/02/2025", location: "KJ", status: "assigned"},
    {serial_number: 'FVFDNSK4P55R', email: "test3@test.com", first_name: "Kelly", last_name: "Williams", date_assigned: "03/03/2024", warranty_end: "03/03/2025", location: "MD", status: "communal"},
    {serial_number: 'FVFDNSK4M43W', email: "test4@test.com", first_name: "Jeremy", last_name: "Clarkson", date_assigned: "04/04/2024", warranty_end: "04/04/2025", location: "TD", status: "assistant"},
  ]);
};
