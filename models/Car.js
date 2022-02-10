const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Listing name is required"],
        minlength: [3, "Listing name must be at least 3 characters long"]
    },

    description: {
        type: String,
        required: [true, "Listing description is required"],
        maxlength: 100,
    },

    imageUrl: {
        type: String,
        required: [true, "Listing imageUrl is required"],
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

    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: "Accessory"
    }],

    owner: { type: mongoose.Types.ObjectId, ref: "User" }
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;