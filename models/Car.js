const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    price: { type: Number },
})

const Car = mongoose.model("Car", carSchema);

module.exports = Car;