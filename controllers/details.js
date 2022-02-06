const carsServices = require("../services/carsServices")

const detailsController = async (req, res) => {
    const id = req.params.id;
    const car = await carsServices.getById(id);

    if (req.session.user.id && req.session.user.id == car.owner) {
        res.locals.isOwner = true;
    }

    res.render("details", { car });
}

const deleteController = async (req, res) => {
    try {

        if (await carsServices.deleteById(req.params.id, req.session.user.id)) {
            res.redirect(`/`);

        } else {
            res.redirect("/login")
        }

    } catch (err) {
        res.redirect("/404");
    }
}

module.exports = {
    detailsController,
    deleteController
}
