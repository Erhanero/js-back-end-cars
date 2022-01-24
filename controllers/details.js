const carsServices = require("../services/carsServices")

const detailsController = (req, res) => {
    const id = req.params.id;
    const car = carsServices.getById(id);
    console.log(car.name);
    res.render("details", { car });
}

module.exports = detailsController;