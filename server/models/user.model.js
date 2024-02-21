const knex = require("../knex");


// "users" is the name of the table in the local DB
const USERS_TABLE = "users";

module.exports = {
    USERS_TABLE,


    getAllUsers(limit = 5) {
        return knex
        .select("*").from(USERS_TABLE).limit(limit);
    },

    // "user" is the payload seen in controller
    addNewUser(user) {
        return knex.insert(user).into(USERS_TABLE);

    },

    getUser(user_name) {
        return knex.select('*').from(USERS_TABLE).where('user_name', user_name).first();
    }
}