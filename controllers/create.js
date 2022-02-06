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
    await carsServices.create(car);
    res.redirect("/");

}
module.exports = {
    get,
    post
};