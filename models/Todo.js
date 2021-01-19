const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    password: String
})

const User = mongoose.Model('User', userSchema)

module.exports = User;
