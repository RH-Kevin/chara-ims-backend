const userModel = require("../models/user.model");
const bcrypt = require('bcrypt');


module.exports = {
    // Displays list of users
    async users(req, res) {
        const users = await userModel.getAllUsers();
        res.json(users);
    },

    // Adds a new user
    async signUp(req, res) {
        const {
            user_name,
            password,
        } = req.body;


        const saltRounds = 10;

        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);

        console.log(hashedPassword);
        const payload = {
            user_name: user_name,
            hashed_password: hashedPassword,
            salt: salt
        };

        let user;

        // Does user already exist?
        try {
            user = await userModel.addNewUser(payload);
            res.status(200).send(user);
        } catch (error) {
            console.log(error);
            // Display error to user ("... username taken / nickname taken")
        }
    },

    // Authenticates User
    async login(req, res) {
        const { user_name, password } = req.body;
        try {
            const user = await userModel.getUser(user_name);
            if (!user) {
                return res.status(404).send('User not found');
            }
            const match = await bcrypt.compare(password, user.hashed_password);
            if (match) {
                // User authenticated successfully
                // Proceed with login (e.g., generate token, set session)
                res.status(200).send(user);
            } else {
                // Password does not match
                res.status(401).send('Authentication failed');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal server error');
        }
    },

    // Changes user privilages
    async swapRole(req,res) {
        const { user_name, isAdmin } = req.body;
        try {
            if (!user) {
                return res.status(404).send('User not found');
            }
            const users = await userModel.changeAccess();
            res.status(200).send("Access updated.");

        } catch (error) {
            console.error(error);
            res.status(500).send('Internal server error');
        }
    }
}