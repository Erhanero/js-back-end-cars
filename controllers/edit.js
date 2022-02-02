const carsServices = require("../services/carsServices");

const get = async (req, res) => {
    const car = await carsServices.getById(req.params.id);
    res.render("edit", { car });

}

const post = async (req, res) => {
    const car = req.body;
    await carsServices.editById(req.params.id, car);
    res.redirect("/");
}

module.exports = {
    get,
    post
}