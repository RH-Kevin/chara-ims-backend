/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('devices').del()
  await knex('devices').insert([
    {serial_number: "FVFDNSK4LDL3", email: "james@test.com", first_name: "James", last_name: "Brown", date_assigned: "03/04/2022", manufacturer: "Apple", model: "MacBook Air", warranty_end: "01/01/2025", purchase_date: "01/01/2025", location: "NF", status: "assigned", service_record: "", notes: "3rd User"},
    {serial_number: "FVFDG6JKl3RT", email: "jane@test.com", first_name: "Jane", last_name: "Francis", date_assigned: "01/12/2022", manufacturer: "Apple", model: "MacBook Air", warranty_end: "01/01/2025", purchase_date: "01/01/2023", location: "NF", status: "assigned", service_record: "Upgraded RAM", notes: ""},
    {serial_number: "FVFD43ERTY8P", email: "sam@test.com", first_name: "Sam", last_name: "Dawn", date_assigned: "11/12/2021", manufacturer: "Apple", model: "MacBook Pro", warranty_end: "01/01/2025", purchase_date: "01/01/2022", location: "NF", status: "assigned", service_record: "", notes: ""},
    {serial_number: "C02S45TYHNFT", email: "paul@test.com", first_name: "Paul", last_name: "Tilson", date_assigned: "12/05/2021", manufacturer: "Apple", model: "MacBook Air", warranty_end: "01/01/2025", purchase_date: "01/01/2024", location: "NF", status: "assigned", service_record: "", notes: ""},
    {serial_number: "FVFDNSK4LDL2", email: "emma@test.com", first_name: "Emma", last_name: "Johnson", date_assigned: "05/09/2023", manufacturer: "Apple", model: "MacBook Pro", warranty_end: "03/21/2025", purchase_date: "01/01/2023", location: "NF", status: "assigned", service_record: "", notes: ""},
    {serial_number: "FVFDG6JKL3TY", email: "michael@test.com", first_name: "Michael", last_name: "Smith", date_assigned: "02/11/2023", manufacturer: "Apple", model: "MacBook Pro", warranty_end: "07/15/2025", purchase_date: "01/01/2023", location: "NF", status: "assigned", service_record: "", notes: ""},
    {serial_number: "FVFD43ERTY8R", email: "sarah@test.com", first_name: "Sarah", last_name: "Lee", date_assigned: "08/07/2022", manufacturer: "Apple", model: "MacBook Air", warranty_end: "11/30/2024", purchase_date: "02/02/2023", location: "NF", status: "assigned", service_record: "", notes: ""},
    {serial_number: "C02S45TYHNFR", email: "alex@test.com", first_name: "Alex", last_name: "Wilson", date_assigned: "09/02/2023", manufacturer: "Apple", model: "MacBook Pro", warranty_end: "04/10/2025", purchase_date: "01/01/2022", location: "NF", status: "assigned", service_record: "", notes: ""},
    {serial_number: "FVFDNSK4LDL1", email: "olivia@test.com", first_name: "Olivia", last_name: "Brown", date_assigned: "04/10/2023", manufacturer: "Apple", model: "MacBook Air", warranty_end: "08/05/2024", purchase_date: "04/11/2023", location: "NF", status: "assigned", service_record: "", notes: ""},
    {serial_number: "FVFDG6JKL3TU", email: "matthew@test.com", first_name: "Matthew", last_name: "Davis", date_assigned: "03/06/2022", manufacturer: "Apple", model: "MacBook Pro", warranty_end: "12/09/2023", purchase_date: "01/01/2025", location: "NF", status: "assigned", service_record: "", notes: ""},
    {serial_number: "FVFD43ERTY8T", email: "emily@test.com", first_name: "Emily", last_name: "Martinez", date_assigned: "07/09/2022", manufacturer: "Apple", model: "MacBook Air", warranty_end: "09/28/2024", purchase_date: "01/01/2025", location: "NF", status: "assigned", service_record: "Replaced LCD", notes: ""},
    {serial_number: "C02S45TYHNFL", email: "daniel@test.com", first_name: "Daniel", last_name: "Taylor", date_assigned: "05/04/2023", manufacturer: "Apple", model: "MacBook Pro", warranty_end: "02/14/2025", purchase_date: "01/01/2025", location: "NF", status: "assigned", service_record: "", notes: ""},
    {serial_number: "FVFDNSK4LDL9", email: "oliver@test.com", first_name: "Oliver", last_name: "Clark", date_assigned: "02/12/2021", manufacturer: "Apple", model: "MacBook Air", warranty_end: "10/19/2023", purchase_date: "01/01/2025", location: "NF", status: "assigned", service_record: "", notes: ""},
    {serial_number: "FVFDG5JKL3TU", email: "mia@test.com", first_name: "Mia", last_name: "Thomas", date_assigned: "11/03/2022", manufacturer: "Apple", model: "MacBook Pro", warranty_end: "06/07/2024", purchase_date: "01/01/2025", location: "NF", status: "assigned", service_record: "", notes: ""},
    {serial_number: "FVFD43ERTY8U", email: "william@test.com", first_name: "William", last_name: "Moore", date_assigned: "08/08/2021", manufacturer: "Apple", model: "MacBook Air", warranty_end: "05/11/2023", purchase_date: "01/01/2025", location: "NF", status: "assigned", service_record: "", notes: ""},
    {serial_number: "C02S45TYHNFO", email: "ava@test.com", first_name: "Ava", last_name: "Garcia", date_assigned: "07/01/2022", manufacturer: "Apple", model: "MacBook Pro", warranty_end: "01/30/2025", purchase_date: "01/01/2025", location: "NF", status: "assigned", service_record: "", notes: ""}


  ]);
};
