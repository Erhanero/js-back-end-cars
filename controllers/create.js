const carsServices = require("../services/carsServices");

const get = (req, res) => {
    res.render("create");
}

const post = (req, res) => {
    const { name, description, imageUrl, price } = req.body;
    carsServices.create(name, description, imageUrl, price);
    res.redirect("/");

}
module.exports = {
    get,
    post
};