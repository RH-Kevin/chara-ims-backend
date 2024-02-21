/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {user_name: "Kevin", hashed_password: "", isAdmin: true, canAccess: true, salt: ""},
    {user_name: "James", hashed_password: "", isAdmin: false, canAccess: false, salt: ""},
  ]);
};
