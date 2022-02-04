const carsServices = require("../services/carsServices");

const homeController = async (req, res) => {
    console.log(res.locals)
    const cars = await carsServices.getAll(req.query);

    res.render("index", { cars, query: req.query });
}

module.exports = homeController;