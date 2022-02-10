const carsServices = require("../services/carsServices");

const get = (req, res) => {
    res.render("create");
}

const post = async (req, res) => {
    const car = {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        owner: req.session.user.id
    }
    try {
        await carsServices.create(car);
        res.redirect("/");

    } catch (errors) {
        errors = Object.values(errors.errors).map(e => ({ msg: e.properties.message }))
        console.log(errors);
        res.render("create", { errors });
    }


}
module.exports = {
    get,
    post
};