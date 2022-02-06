const carsServices = require("../services/carsServices");
const accessoryServices = require("../services/accessoryServices");

const get = async (req, res) => {
    try {
        const car = await carsServices.getById(req.params.id);
        const accessories = await accessoryServices.getAllWithout(car.accessories.map(x => x._id));
        res.render("attachAccessory", { car, accessories });

    } catch (err) {
        console.log(err.message)
        res.redirect("404")
    }
}

const post = async (req, res) => {
    const carId = req.params.id;
    const accessoryId = req.body.accessory;
    try {
        if (await carsServices.attachAccessory(carId, accessoryId, req.session.user.id)) {
            res.redirect(`/details/${carId}`);

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