const mongoose = require("mongoose");
const Car = require("../models/Car");

const connectionString = "mongodb://localhost:27017/CarsDb";

async function init() {
    try {

        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true


        })

    } catch (err) {
        console.error("Error conecting to database!");
        proccess.exit(1);
    }
}

module.exports = init;