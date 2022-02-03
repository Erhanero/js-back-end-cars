const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 100,
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
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: "Accessory"
    }]
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;