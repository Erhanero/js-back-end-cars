const carsServices = require("../services/carsServices")

const detailsController = async (req, res) => {
    const id = req.params.id;
    const car = await carsServices.getById(id);
    res.render("details", { car });
}

const deleteController = async (req, res) => {
    try {
        await carsServices.deleteById(req.params.id);
        res.redirect(`/`);

    } catch (err) {
        res.redirect("/404");
    }
}

module.exports = {
    detailsController,
    deleteController
}
