// Require the mongoose library
const mongoose = require("mongoose");

// Define the note's database schema
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            index: { unique: true }
        },
        email: {
            type: String,
            required: true,
            index: { unique: true }
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String
        },
    },
    {
        //Assigns createdAt and updatedAt fields with a Data type
        timestamps: true
    }
);

//Define the "Note" model with the schema
const User = mongoose.model('User', UserSchema);
//Export the module
module.exports = User;