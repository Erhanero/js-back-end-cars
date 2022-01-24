const carsServices = require("../services/carsServices");

const homeController = (req, res) => {

    const cars = carsServices.getAll(req.query);


    res.render("index", { cars, query: req.query });
}

module.exports = homeController;