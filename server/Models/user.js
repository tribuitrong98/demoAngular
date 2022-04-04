const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    hoten: String,
    email: String,
    password: String
});

module.exports = mongoose.model("user", userSchema);