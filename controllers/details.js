const carsServices = require("../services/carsServices")

const detailsController = async (req, res) => {
    const id = req.params.id;
    const car = await carsServices.getById(id);
    console.log(car)
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
