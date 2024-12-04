const mongoose = require('mongoose');
const Schema = mongoose.schema;

const userSchema = new Schema({
    fullName:{type: String},
    email: {type: String},
    password: {type: String},
    createdOn: {type: Date, default: new Date().getTime() }
});

module.exports = mongoose.module("User", userSchema);