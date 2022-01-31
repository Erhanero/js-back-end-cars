const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/CarsDb";

async function init() {
    try {

        await mongoose.connec(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (err) {
        console.error("Error conecting to database!");
        // proccess.exit(1);
    }
}

module.exports = init;