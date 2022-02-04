const mongoose = require("mongoose");
const { comparePassword } = require("../services/util");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, minlength: 3, unique: true },
    hashedPassword: { type: String, required: true }
});

userSchema.methods.comparePassword = async function (password) {
    return await comparePassword(password, this.hashedPassword;)
}

const User = mongoose.model("User", userSchema);

module.exports = User;