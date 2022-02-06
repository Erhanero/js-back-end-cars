const carsServices = require("../services/carsServices");

const get = async (req, res) => {
    const car = await carsServices.getById(req.params.id);

    if (car.owner != req.session.user.id) {
        console.log("User is not owner!");
        return res.redirect("/login");
    }

    res.render("edit", { car });
}

const post = async (req, res) => {
    const car = req.body;
    try {
        if (await carsServices.editById(req.params.id, car, req.session.user.id)) {
            res.redirect("/");
        } else {
            res.redirect("/login");
        }

    } catch (err) {
        res.redirect("404")
    }

}

module.exports = {
    get,
    post
}