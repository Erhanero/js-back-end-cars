const carsServices = require("../services/carsServices");

const homeController = (req, res) => {
    const cars = carsServices.getAll();
    console.log(cars);
    res.render("index", { cars });
}

module.exports = homeController;