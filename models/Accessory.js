const mongoose = require("mongoose");

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 300,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^https?:\/\//i.test(value)
            },
            message: "Image Url is invalid!"
        },
    },
    price: {
        type: Number,
        require: true,
    },

    owner: { type: mongoose.Types.ObjectId, ref: "User" }

});

const Accessory = mongoose.model("Accessory", accessorySchema);

module.exports = Accessory;